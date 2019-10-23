import {
  Component,
  OnInit,
} from '@angular/core';
import { CollectionsAndFunctions } from './collections-and-functions';

@Component({
  selector: 'app-collection-pipe-samples',
  templateUrl: './collection-pipe-samples.component.html',
  styleUrls: ['./collection-pipe-samples.component.scss'],
})
export class CollectionPipeSamplesComponent extends CollectionsAndFunctions implements OnInit {

  constructor () {
    super();
  }

  ngOnInit () {
  }

}
