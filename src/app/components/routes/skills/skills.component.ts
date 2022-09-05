import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data:any  = {
    name: "Juan Manuel Herrero",
    img: "../../../../assets/img/optimizadas/jmfinal.png",
    cv: "https://drive.google.com/file/d/1zbwUxdBXXq_jvGDz_kXfHxTWyEIUehv6/view?usp=sharing",   
    git: "https://github.com/juanmah98?tab=repositories",
    link: "https://www.linkedin.com/in/juan-manuel-herrero-890435206", 
    bit: "https://bitbucket.org/dashboard/repositories",    
  }

  skills:any ={
    angular: "../../../../assets/img/iconos/angular.png",
    api:"../../../../assets/img/iconos/api.png",
    csh:"../../../../assets/img/iconos/cc.png",
    c:"../../../../assets/img/iconos/c.png",
    css: "../../../../assets/img/iconos/css.png",
    dart:"../../../../assets/img/iconos/dart.png",
    flutter:"../../../../assets/img/iconos/flutter.png",
    git:"../../../../assets/img/iconos/git.png",
    html: "../../../../assets/img/iconos/html.png",
    js:"../../../../assets/img/iconos/js.png",
    mysql:"../../../../assets/img/iconos/mysqll.png",
    php:"../../../../assets/img/iconos/php.png",
    python:"../../../../assets/img/iconos/python.png",
    react:"../../../../assets/img/iconos/react.png",
    skills:"../../../../assets/img/iconos/skills.png",
    sql:"../../../../assets/img/iconos/sql.png",
    type:"../../../../assets/img/iconos/typescript.png"
  };
  soft:any={
    android:"../../../../assets/img/iconos/softwares/android.png",
    corel:"../../../../assets/img/iconos/softwares/coreldraw.png",
    discord:"../../../../assets/img/iconos/softwares/discord.png",
    firebase:"../../../../assets/img/iconos/softwares/firebase.png",
    github:"../../../../assets/img/iconos/softwares/github.png",
    gitlab:"../../../../assets/img/iconos/softwares/gitlab.png",
    jira:"../../../../assets/img/iconos/softwares/jira.png",
    linux:"../../../../assets/img/iconos/softwares/linux.png",
    microsoft:"../../../../assets/img/iconos/softwares/microsoft.png",
    obs:"../../../../assets/img/iconos/softwares/obs.png",
    photoshop:"../../../../assets/img/iconos/softwares/photoshop.png",
    visual:"../../../../assets/img/iconos/softwares/visual.png",
    cv:"../../../../assets/img/iconos/softwares/cv.png",
    linkedin:"../../../../assets/img/iconos/softwares/linkedin.png",
    software:"../../../../assets/img/iconos/softwares/herramienta.png",
    bitbucket:"../../../../assets/img/iconos/softwares/bitbucket.png"
  }


  
;
}
