import EmployeeService from "../services/EmployeeService";
import Employee from "../types/Employee";

describe("EmployeeService", () => {

  describe("getEmployees", () => {
    it("should return a list of employees", async () => {
      // Make the API call to get employees
      const response = await EmployeeService.getEmployees();

      // Assert that the response contains the expected data
      expect(response).toBeDefined();
      expect(response.data).toEqual([new Employee(1,'Donato','Manzione','donato.manz.sc@gmail.com'),new Employee(2, "Donato","Manzione","donato.manz.scatto@gmail.com")]);
    });

    // it("should handle errors when fetching employees", async () => {
      
    //   const response = await EmployeeService.getEmployees();

     
    //   expect(response).toBeDefined();
    // //   expect(response.error).toEqual(/* expected error message */);
    // });
  });

  describe("getEmployeeById", () => {
    it("should return an employee by ID", async () => {
      // Make the API call to get an employee by ID
      const response = await EmployeeService.getEmployeeById(1);

      // Assert that the response contains the expected data
      expect(response).toBeDefined();
      expect(response.data).toEqual(new Employee(id, 'Donato', 'Manzione', 'donato.manz.sc@gmail.com'));
    });

    // it("should handle errors when fetching an employee by ID", async () => {
    //   // Set up a mock for the API call that throws an error
    //   // ...

    //   // Make the API call to get an employee by ID
    //   const response = await EmployeeService.getEmployeeById(/* employee ID */);

    //   // Assert that the response contains the expected error
    //   expect(response).toBeDefined();
    //   expect(response.error).toEqual(/* expected error message */);
    // });
  });
});

export default EmployeeService;