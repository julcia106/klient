<template>
  <div class="container">
    <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
      @click="addClick()">
      Zarejestruj się
    </button>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            Id Klienta
          </th>
          <th>
            Imie i nazwisko
          </th>
          <th>
            Zabieg
          </th>
          <th>
            Data
          </th>
          <th>
            Opcje
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in employees">
          <td>{{ emp.EmployeeId }}</td>
          <td>{{ emp.EmployeeName }}</td>
          <td>{{ emp.Department }}</td>
          <td>{{ emp.DateOfJoining }}</td>
          <td>
            <button type="button" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal"
              @click="editClick(emp)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </button>
            <button type="button" @click="deleteClick(emp.EmployeeId)" class="btn btn-light mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>

          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 w-50 bd-highlight">
                <div class="input-group mb-3">
                  <span class="input-group-text">Imie i nazwisko</span>
                  <input type="text" class="form-control" v-model="EmployeeName">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text">Zabieg</span>
                  <select class="form-select" v-model="Department">
                    <option v-for="dep in departments">
                      {{ dep.DepartmentName }}
                    </option>
                  </select>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text">Data</span>
                  <input type="date" class="form-control" v-model="DateOfJoining">
                </div>

              </div>
            </div>
            <button type="button" @click="createClick()" v-if="EmployeeId == 0" class="btn btn-primary">
              Create
            </button>
            <button type="button" @click="updateClick()" v-if="EmployeeId != 0" class="btn btn-primary">
              Submit
            </button>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {

    let API_URL = "http://localhost:5868/api/";
    let PHOTO_URL = "http://localhost:5868/photos/";

    function refreshData() {
      axios.get(API_URL + "employee")
        .then((response) => {
          employees = response.data;
        });

      axios.get(API_URL + "department")
        .then((response) => {
          departments = response.data;
        });
    }

    function addClick() {
      modalTitle = "Add Employee";
      EmployeeId = 0;
      EmployeeName = "";
      Department = "",
        DateOfJoining = "",
        PhotoFileName = "anonymous.png"
    }

    function editClick(emp) {
      this.modalTitle = "Edit Employee";
      this.EmployeeId = emp.EmployeeId;
      this.EmployeeName = emp.EmployeeName;
      this.Department = emp.Department,
        this.DateOfJoining = emp.DateOfJoining,
        this.PhotoFileName = emp.PhotoFileName
    }

    function createClick() {
      axios.post(variables.API_URL + "employee", {
        EmployeeName: this.EmployeeName,
        Department: this.Department,
        DateOfJoining: this.DateOfJoining,
        PhotoFileName: this.PhotoFileName
      })
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    }

    function updateClick() {
      axios.put(variables.API_URL + "employee", {
        EmployeeId: this.EmployeeId,
        EmployeeName: this.EmployeeName,
        Department: this.Department,
        DateOfJoining: this.DateOfJoining,
        PhotoFileName: this.PhotoFileName
      })
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    }

    function deleteClick(id) {
      if (!confirm("Are you sure?")) {
        return;
      }
      axios.delete(variables.API_URL + "employee/" + id)
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });

    }

    function imageUpload(event) {
      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      axios.post(
        variables.API_URL + "employee/savefile",
        formData)
        .then((response) => {
          this.PhotoFileName = response.data;
        });
    }


    return {
      departments: [],
      employees: [],
      modalTitle: "",
      EmplpoyeeId: 0,
      EmployeeName: "",
      Department: "",
      DateOfJoining: "",
      PhotoFileName: "anonymous.png",
      API_URL,
      PHOTO_URL,
      refreshData,
      addClick,
      createClick,
      editClick
    };
  }
};
</script>

<style scoped>
</style>