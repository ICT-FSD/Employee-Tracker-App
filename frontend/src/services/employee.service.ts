import http from "../http-common";
import IemployeeData from "../types/employee.type"

class employeeDataService {
  getAll() {
    return http.get<Array<IemployeeData>>("/employees");
  }

  get(id: string) {
    return http.get<IemployeeData>(`/employees/${id}`);
  }

  create(data: IemployeeData) {
    return http.post<IemployeeData>("/employees", data);
  }

  update(data: IemployeeData, id: any) {
    return http.put<any>(`/employees/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/employees/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/employees`);
  }

  findByTitle(title: string) {
    return http.get<Array<IemployeeData>>(`/employees?title=${title}`);
  }
}

export default new employeeDataService();