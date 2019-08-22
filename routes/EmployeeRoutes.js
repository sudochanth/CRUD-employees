const express = require('express');
const employeeRoute = express.Router();
const Employee = require('../models/EmployeeModel');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

employeeRoute.route('/')
  .get((request, response) => {
    Employee.find((err, employees) => {
      if (err) return response.status(501).send(err)
      return response.status(200).send(employees)
    })
  })

  .post((request, response, next) => {
    const newEmployee = new Employee(request.body)
    newEmployee.save((err, savedEmployee) => {
        if (err) {
            response.status(500)
            return next(err)
        }
        return response.status(201).send(savedEmployee)

    })
  })

employeeRoute.route('/:_id')
  // do i need get employee by one id?
  // .get((request, response, next) => {
  //   Employee.findOne({ _id: request.params._id }, (err, employee) => {
  //       if (err) {
  //         response.status(500)
  //         return next(err)
  //       }
  //       return response.status(200).send(employee)
  //   })
  // })

  .delete((request, response, next) => {
    Employee.findOneAndRemove(
      { _id: request.params._id}, (err, deletedEmployee) => {
          if (err) {
              response.status(500)
              return next(err)
          }
          return response.status(202).send(`Employee ${deletedEmployee.firstName} ${deletedEmployee.lastName} deleted`)
      })
      }
  )

  .put((request, response, next) => {
    Employee.findOneAndUpdate(
        { _id: request.params._id },
        request.body,
        { new: true },
        (err, updatedEmployee) => {
            if (err) {
                response.status(500)
                return next(err)
            }
            return response.status(201).send(updatedEmployee)
        })
  })

module.exports = employeeRoute;