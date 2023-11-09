declare let event: MouseEvent | TouchEvent;

interface MouseEvent extends UIEvent {
  readonly altKey: boolean;
  readonly button: number;
  readonly buttons: number;
  readonly clientX: number;
  readonly clientY: number;
  readonly ctrlKey: boolean;
  readonly metaKey: boolean;
  readonly movementX: number;
  readonly movementY: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly pageX: number;
  readonly pageY: number;
  readonly relatedTarget: EventTarget | null;
  readonly screenX: number;
  readonly screenY: number;
  readonly shiftKey: boolean;
  readonly x: number;
  readonly y: number;
  getModifierState(keyArg: string): boolean;
  /** @deprecated */
  initMouseEvent(
    typeArg: string,
    canBubbleArg: boolean,
    cancelableArg: boolean,
    viewArg: Window,
    detailArg: number,
    screenXArg: number,
    screenYArg: number,
    clientXArg: number,
    clientYArg: number,
    ctrlKeyArg: boolean,
    altKeyArg: boolean,
    shiftKeyArg: boolean,
    metaKeyArg: boolean,
    buttonArg: number,
    relatedTargetArg: EventTarget | null,
  ): void;
}

interface TouchEvent extends UIEvent {
  readonly altKey: boolean;
  readonly changedTouches: TouchList;
  readonly ctrlKey: boolean;
  readonly metaKey: boolean;
  readonly shiftKey: boolean;
  readonly targetTouches: TouchList;
  readonly touches: TouchList;
}

interface UIEvent extends Event {
  readonly detail: number;
  readonly view: Window | null;
  /** @deprecated */
  readonly which: number;
  /** @deprecated */
  initUIEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    detailArg?: number,
  ): void;
}

/** An event which takes place in the DOM. */
interface Event {
  /** Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise. */
  readonly bubbles: boolean;
  cancelBubble: boolean;
  /** Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method. */
  readonly cancelable: boolean;
  /** Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise. */
  readonly composed: boolean;
  /** Returns the object whose event listener's callback is currently being invoked. */
  readonly currentTarget: EventTarget | null;
  /** Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise. */
  readonly defaultPrevented: boolean;
  /** Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE. */
  readonly eventPhase: number;
  /** Returns true if event was dispatched by the user agent, and false otherwise. */
  readonly isTrusted: boolean;
  /** @deprecated */
  returnValue: boolean;
  /** @deprecated */
  readonly srcElement: EventTarget | null;
  /** Returns the object to which event is dispatched (its target). */
  readonly target: EventTarget | null;
  /** Returns the event's timestamp as the number of milliseconds measured relative to the time origin. */
  readonly timeStamp: DOMHighResTimeStamp;
  /** Returns the type of event, e.g. "click", "hashchange", or "submit". */
  readonly type: string;
  /** Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget. */
  composedPath(): EventTarget[];
  /** @deprecated */
  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
  /** If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled. */
  preventDefault(): void;
  /** Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects. */
  stopImmediatePropagation(): void;
  /** When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object. */
  stopPropagation(): void;
  readonly AT_TARGET: number;
  readonly BUBBLING_PHASE: number;
  readonly CAPTURING_PHASE: number;
  readonly NONE: number;
}

interface EventTarget {
  /**
   *
   * Remove all event listeners by name for this event target.
   *
   * This method is optional because it may not be available if you use `noop zone` when
   * bootstrapping Angular application or disable the `EventTarget` monkey patch by `zone.js`.
   *
   * If the `eventName` is provided, will remove event listeners of that name.
   * If the `eventName` is not provided, will remove all event listeners associated with
   * `EventTarget`.
   *
   * @param eventName the name of the event, such as `click`. This parameter is optional.
   */
  removeAllListeners?(eventName?: string): void;
  /**
   *
   * Retrieve all event listeners by name.
   *
   * This method is optional because it may not be available if you use `noop zone` when
   * bootstrapping Angular application or disable the `EventTarget` monkey patch by `zone.js`.
   *
   * If the `eventName` is provided, will return an array of event handlers or event listener
   * objects of the given event.
   * If the `eventName` is not provided, will return all listeners.
   *
   * @param eventName the name of the event, such as click. This parameter is optional.
   */
  eventListeners?(eventName?: string): EventListenerOrEventListenerObject[];
}

interface HTMLInputElement extends HTMLElement {
  /** Sets or retrieves a comma-separated list of content types. */
  accept: string;
  /**
   * Sets or retrieves how the object is aligned with adjacent text.
   * @deprecated
   */
  align: string;
  /** Sets or retrieves a text alternative to the graphic. */
  alt: string;
  /** Specifies whether autocomplete is applied to an editable text field. */
  autocomplete: string;
  capture: string;
  /** Sets or retrieves the state of the check box or radio button. */
  checked: boolean;
  /** Sets or retrieves the state of the check box or radio button. */
  defaultChecked: boolean;
  /** Sets or retrieves the initial contents of the object. */
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  /** Returns a FileList object on a file type input object. */
  files: FileList | null;
  /** Retrieves a reference to the form that the object is embedded in. */
  readonly form: HTMLFormElement | null;
  /** Overrides the action attribute (where the data on a form is sent) on the parent form element. */
  formAction: string;
  /** Used to override the encoding (formEnctype attribute) specified on the form element. */
  formEnctype: string;
  /** Overrides the submit method attribute previously specified on a form element. */
  formMethod: string;
  /** Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option. */
  formNoValidate: boolean;
  /** Overrides the target attribute on a form element. */
  formTarget: string;
  /** Sets or retrieves the height of the object. */
  height: number;
  /** When set, overrides the rendering of checkbox controls so that the current value is not visible. */
  indeterminate: boolean;
  readonly labels: NodeListOf<HTMLLabelElement> | null;
  /** Specifies the ID of a pre-defined datalist of options for an input element. */
  readonly list: HTMLElement | null;
  /** Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field. */
  max: string;
  /** Sets or retrieves the maximum number of characters that the user can enter in a text control. */
  maxLength: number;
  /** Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field. */
  min: string;
  minLength: number;
  /** Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list. */
  multiple: boolean;
  /** Sets or retrieves the name of the object. */
  name: string;
  /** Gets or sets a string containing a regular expression that the user's input must match. */
  pattern: string;
  /** Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field. */
  placeholder: string;
  readOnly: boolean;
  /** When present, marks an element that can't be submitted without a value. */
  required: boolean;
  selectionDirection: 'forward' | 'backward' | 'none' | null;
  /** Gets or sets the end position or offset of a text selection. */
  selectionEnd: number | null;
  /** Gets or sets the starting position or offset of a text selection. */
  selectionStart: number | null;
  size: number;
  /** The address or URL of the a media resource that is to be considered. */
  src: string;
  /** Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field. */
  step: string;
  /** Returns the content type of the object. */
  type: string;
  /**
   * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
   * @deprecated
   */
  useMap: string;
  /** Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting. */
  readonly validationMessage: string;
  /** Returns a  ValidityState object that represents the validity states of an element. */
  readonly validity: ValidityState;
  /** Returns the value of the data at the cursor's current position. */
  value: string;
  /** Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based. */
  valueAsDate: Date | null;
  /** Returns the input field value as a number. */
  valueAsNumber: number;
  readonly webkitEntries: ReadonlyArray<FileSystemEntry>;
  webkitdirectory: boolean;
  /** Sets or retrieves the width of the object. */
  width: number;
  /** Returns whether an element will successfully validate based on forms validation rules and constraints. */
  readonly willValidate: boolean;
  /** Returns whether a form will validate when it is submitted, without having to submit it. */
  checkValidity(): boolean;
  reportValidity(): boolean;
  /** Makes the selection equal to the current object. */
  select(): void;
  /**
   * Sets a custom error message that is displayed when a form is submitted.
   * @param error Sets a custom error message that is displayed when a form is submitted.
   */
  setCustomValidity(error: string): void;
  setRangeText(replacement: string): void;
  setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
  /**
   * Sets the start and end positions of a selection in a text field.
   * @param start The offset into the text field for the start of the selection.
   * @param end The offset into the text field for the end of the selection.
   * @param direction The direction in which the selection is performed.
   */
  setSelectionRange(start: number | null, end: number | null, direction?: 'forward' | 'backward' | 'none'): void;
  /**
   * Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value.
   * @param n Value to decrement the value by.
   */
  stepDown(n?: number): void;
  /**
   * Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value.
   * @param n Value to increment the value by.
   */
  stepUp(n?: number): void;
  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}
