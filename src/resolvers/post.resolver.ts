import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { BooruService } from 'src/services/booru.service';
import { BooruPost } from 'src/types/BooruPost';

@Injectable()
export class PostResolver implements Resolve<BooruPost> {
  constructor(private booruSvc: BooruService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.booruSvc.getPost(route.paramMap.get('id')!);
  }
}