package com.pm.patientservice.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PatientRequestDTO {
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
    @NotNull(message = "Register Date is Required")
    private String registeredDate;
}
