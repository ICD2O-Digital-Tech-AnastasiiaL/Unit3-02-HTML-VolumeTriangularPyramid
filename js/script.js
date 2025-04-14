// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume of the triangle
 */
function calculateVolume() {
  // Information about values
  let height = parseInt(document.getElementById('height-of-the-triangle').value);
    let base = parseInt(document.getElementById('base-of-the-triangle').value);

  // Calculation
  let volume = (1/3) * base * height

  // Display
  document.getElementById('volume').innerHTML = 'Volume of a triangle is: ' + volume + ' cm^3'
}