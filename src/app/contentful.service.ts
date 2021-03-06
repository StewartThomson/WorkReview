import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../environments/environment';
import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as marked from 'marked';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  constructor() { }

  logContent(contentId) {
     this.client.getEntry(contentId)
      .then(entry => console.log(entry) )
  }

  getContent(contentId) {
    const promise = this.client.getEntry(contentId);
    return from(promise).pipe(map(entry => entry.fields));
  }
  
  getAllEntries(){
    const promise = this.client.getEntries();
    return from(promise).pipe(map(response => response.items.sort((a: any,b: any) => {
      return a.fields.date.localeCompare(b.fields.date);
    })));
  }

  markdownToHtml(md: string) {
    return marked(md)
  }
}
