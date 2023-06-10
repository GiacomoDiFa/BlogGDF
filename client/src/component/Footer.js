import React from 'react'

function Footer() {
  return (
    <>
      {/*<!-- Footer-->*/}
      <footer class="border-top">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <ul class="list-inline text-center">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/giacomo.difabrizio/">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.instagram.com/giacomodifabrizio_/">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://github.com/GiacomoDiFa">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div class="small text-center text-muted fst-italic">Copyright &copy; Giacomo Di Fabrizio 2023</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer