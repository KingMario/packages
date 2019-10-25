/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Directive,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';


@Directive({ selector: '[let]' })
export class NgxLetDirective {
  private _context: NgxLetContext = new NgxLetContext();
  private _viewRef: EmbeddedViewRef<NgxLetContext> | null = null;

  constructor (private _viewContainer: ViewContainerRef, private templateRef: TemplateRef<NgxLetContext>) {
  }

  /**
   * The expression to be stored as local value and used for showing a template.
   */
  @Input()
  set let (value: any) {
    this._context.let = value;

    if (!this._viewRef) {
      this._viewContainer.clear();
      if (this.templateRef) {
        this._viewRef =
          this._viewContainer.createEmbeddedView(this.templateRef, this._context);
      }
    }
  }

}

export class NgxLetContext {
  public let: any = null;
}
