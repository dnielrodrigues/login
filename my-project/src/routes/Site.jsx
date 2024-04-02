import { useState } from 'react';
import './Site.css';

function Site() {
  return (
    <>
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            INFO TEC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/Register"
                  >
                    Inscreva-se
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" 
                  aria-current="page" 
                  href="/Login"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Site;
