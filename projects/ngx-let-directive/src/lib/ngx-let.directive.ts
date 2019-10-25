/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';


@Directive({ selector: '[let]' })
export class NgxLetDirective {
  private _context: NgxLetContext = new NgxLetContext();

  constructor (private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<NgxLetContext>) {
  }

  /**
   * The expression to be stored as local value and used for showing a template.
   */
  @Input()
  set let (value: any) {
    this._context.let = value;

    this._viewContainer.clear();
    if (this._templateRef) {
      this._viewContainer.createEmbeddedView(this._templateRef, this._context);
    }
  }

}

export class NgxLetContext {
  public let: any = null;
}
