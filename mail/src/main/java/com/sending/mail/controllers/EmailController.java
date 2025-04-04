package com.sending.mail.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sending.mail.services.IEmailService;
import com.sending.mail.services.models.EmailDTO;

import jakarta.mail.MessagingException;

@RestController
@RequestMapping
public class EmailController {

    @Autowired
    IEmailService emailService;

    @PostMapping("/send-email")
    private ResponseEntity<String> sendEmail(@RequestBody EmailDTO email) throws MessagingException{
        emailService.sendMail(email);
        return new ResponseEntity<>("Correo enviado", HttpStatus.OK);
    }
}