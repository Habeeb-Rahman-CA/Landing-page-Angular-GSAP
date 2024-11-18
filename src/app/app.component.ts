import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
 
  initSrollTrigger():void{
    gsap.to('.menu, .nav-list, .bottom', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: 'section.home',
        scrub: true,
        start: '60% 60%',
        end: '70% 30%'
      }
    })
    gsap.to('.heading-main',{
      opacity: 0,
      duration: 0.5,
      scrollTrigger:{
        trigger: 'section.one',
        scrub: true,
        start: '90% 80%',
        end: '100% 20%'
      }
    })
    gsap.to('figure.preview', {
      scrollTrigger: {
        trigger: 'figure.preview',
        toggleClass: 'active',
        start: '50% 80%',
        end: '85% 20%'
      }
    })
  }

ngAfterViewInit(): void {
    this.initSrollTrigger()
}

}