package com.pm.patientservice.dto;

import com.pm.patientservice.dto.validators.CreatePatientValidationGroup;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PatientRequestDTO {
    public @NotBlank(message = "Name is Required") @Size(max = 20, message = "Name cannot exceed 100 characters") String getName() {
        return name;
    }

    public void setName(@NotBlank(message = "Name is Required") @Size(max = 20, message = "Name cannot exceed 100 characters") String name) {
        this.name = name;
    }

    public @Email(message = "Please Enter Valid Email") @NotBlank(message = "Email is Required") String getEmail() {
        return email;
    }

    public void setEmail(@Email(message = "Please Enter Valid Email") @NotBlank(message = "Email is Required") String email) {
        this.email = email;
    }

    public @NotBlank(message = "Address is Required") String getAddress() {
        return address;
    }

    public void setAddress(@NotBlank(message = "Address is Required") String address) {
        this.address = address;
    }

    public @NotBlank(message = "Date of Birth is Required") String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(@NotBlank(message = "Date of Birth is Required") String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public @NotBlank(groups = CreatePatientValidationGroup.class, message = "Register Date is Required") String getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(@NotBlank(groups = CreatePatientValidationGroup.class, message = "Register Date is Required") String registeredDate) {
        this.registeredDate = registeredDate;
    }

    @NotBlank(message = "Name is Required")
    @Size(max = 20,message = "Name cannot exceed 100 characters")
    private String name;

    @Email(message = "Please Enter Valid Email")

    @NotBlank(message = "Email is Required")
    private String email;

    @NotBlank(message = "Address is Required")
    private String address;
    @NotBlank(message = "Date of Birth is Required")
    private String dateOfBirth;
    @NotBlank(groups= CreatePatientValidationGroup.class, message = "Register Date is Required")
    private String registeredDate;
}
