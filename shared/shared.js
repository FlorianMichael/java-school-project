/*
This project is licensed under the MIT License.
See the LICENSE file in the project root for details.

Copyright (c) 2024-2025 FlorianMichael/EnZaXD <florian.michael07@gmail.com>
*/

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");
    themeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("dark-theme", document.body.classList.contains("dark-theme"));
    });

    if (localStorage.getItem("dark-theme") === "true") {
        document.body.classList.add("dark-theme");
    }

    const spinToggleButton = document.getElementById("spin-toggle");
    spinToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("spin");
    });
});