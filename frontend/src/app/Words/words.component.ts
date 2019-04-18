import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordServiceComponent } from './wordService.component';
import { Words } from "./words.Model";
import { Subscription } from 'rxjs';
import {Router,Event, NavigationStart, NavigationEnd } from '@angular/router'
import { randomWord } from './randomWord.Model';
import { results } from './results.Model';

export let browserRefresh = false;

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  newWord: Words[];
  displayedWord:string;
  newWordMeaning: string;
  //data: string[];
  wordMeaning1: string;
  wordMeaning2: string;
  example1: string;
  example2: string;
  wordType1: string;
  wordType2: string;

  showLoadingIndicator = true;
  constructor(private _wordsService: WordServiceComponent, private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {

      // if (routerEvent instanceof NavigationStart) {
        
      //   this.showLoadingIndicator = true;
      // }

      // if (routerEvent instanceof NavigationEnd) {
       
      //   this.showLoadingIndicator = false;
      // }

    });
  
  }



  ngOnInit() {
    this.showLoadingIndicator = true;
    this._wordsService.getNewWords().subscribe((data) => {
      this.showLoadingIndicator = false;
      this.newWord = data;
      console.log(this.newWord);
      this.displayedWord = this.newWord[0].word;
      console.log("Displayed word:" + this.displayedWord);
      /*const resultJson1 = this.newWord.results[0];
      if (resultJson1.lexicalEntries !== undefined) {
        if (resultJson1.lexicalEntries[0].entries[0].senses[0].definitions !== undefined) {
          this.wordMeaning1 = resultJson1.lexicalEntries[0].entries[0].senses[0].definitions[0];
        }

        if (resultJson1.lexicalEntries[0].entries[0].senses[0].examples !== undefined) {
          this.example1 = resultJson1.lexicalEntries[0].entries[0].senses[0].examples[0].text;
        }
        this.newWord.word = resultJson1.word;
        this.wordType1 = resultJson1.lexicalEntries[0].lexicalCategory;
        if (resultJson1.lexicalEntries.length > 1) {

          if (resultJson1.lexicalEntries[1].entries[0].senses[0].definitions !== undefined) {
            this.wordMeaning2 = resultJson1.lexicalEntries[1].entries[0].senses[0].definitions[0];
          }

          if (resultJson1.lexicalEntries[1].entries[0].senses[0].examples !== undefined) {
            this.example2 = resultJson1.lexicalEntries[1].entries[0].senses[0].examples[0].text;
          }
          this.wordType2 = resultJson1.lexicalEntries[1].lexicalCategory;
        }
        
        


      }*/
      
    });
  }

}
