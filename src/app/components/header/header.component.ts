import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lessons: string[] = [];

  constructor(private service: LessonService, private router: Router) {
    for(let i of service.lessonList){
      this.lessons.push(i.title);
    }

    // this.setCookie("theme", null!, null!);
    
  }

  GoToLesson(number: number): void {
    this.service.GoToLesson(this.router, number);
  }

  ngOnInit() {
    if(this.getCookie("theme") === null ) {
      this.setCookie("theme", "light", 10);
    }


    let el = document.getElementById("theme")!;
    let str = this.getCookie("theme")!
    el.setAttribute("data-bs-theme", str);

    if(str === "dark"){
      (document.getElementById("darkSwitch") as HTMLInputElement).checked = true;
    }
  }

  ChangeTheme():void {
    let el = document.getElementById("theme")!;

    switch(el.getAttribute("data-bs-theme")!){
      case "light":
        el.setAttribute("data-bs-theme", "dark");
        this.setCookie("theme", "dark", 10);
        break;
      case "dark":
        el.setAttribute("data-bs-theme", "light");
        this.setCookie("theme", "light", 10);
        break;
    }
  }


  private setCookie(name: string, value: string, daysToLive: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();

    document.cookie = `${name}=${value}; ${expires}; SameSite=None; Secure; path=/`;    
  }

  private getCookie(name: string): string | null {
    if (document.cookie === "") return null;
    return decodeURIComponent(document.cookie).substring(name.length + 1);
  }
}
