import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  options = {
    "offset": 205,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "headroom--pinned",
      "unpinned": "headroom--unpinned"
    }
  };

  // scroll-to-top

  isShow!: boolean;
  topPosToStartShowing = 300;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  ngOnInit(): void {
  }

  mobilemenu() {
    $(".nav").toggleClass("mobile-nav");
    $('.menu-toggle').toggleClass("is-active");
  }

  closemenu() {
    $(".nav").removeClass("mobile-nav");
    $('.menu-toggle').removeClass("is-active");
  }

}
