declare let component: ProxyComponentInstance<PValue, PFields>;
interface ProxyComponentInstance<PValue, PFields> {
  readonly parent: ProxyComponentInstance<PValue, PFields>;
  getModel: () => any;
  getComponentById: (id: string) => ProxyComponentInstance<PValue, PFields> | null;
  getComponentByPath: (path: UPath) => ProxyComponentInstance<PValue, PFields> | null;
  getComponentByPathAll: (path: UPath) => ProxyComponentInstance<PValue, PFields>[] | null;
  getComponentByType: (type: UType) => ProxyComponentInstance<PValue, PFields> | null;
  getComponentByTypeAll: (type: UType) => ProxyComponentInstance<PValue, PFields> | null;
  getChildrenComponent: () => ProxyComponentInstance<PValue, PFields>[] | null;
  getControl: () => IProxyControl<PValue, PFields>;
  getControlByPath: () => IProxyControl<PValue, PFields>;
}
type UPath = string;
type UType = string;
interface IProxyControl<TValue, PFields> {
  parent: IProxyArray<TValue, any, PFields> | IProxyGroup<TValue, any, PFields> | null;
  value: TValue;
  status: string;
  dirty: boolean;
  disabled: boolean;
  valid: boolean;
  invalid: boolean;
  pending: boolean;
  enabled: boolean;
  _prevValue: TValue;
  setValue(
    value: TValue,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    },
  ): void;
  patchValue(
    value: TValue,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    },
  ): void;
  reset(formState?: TValue | NgControlStatus, options?: { onlySelf?: boolean; emitEvent?: boolean }): void;
  getRawValue(): TValue;
  addValidators(validators: ValidatorFn | ValidatorFn[]): void;
  addAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void;
  removeValidators(validators: ValidatorFn | ValidatorFn[]): void;
  removeAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void;
  disable(opts: { onlySelf?: boolean; emitEvent?: boolean }): void;
  enable(opts: { onlySelf?: boolean; emitEvent?: boolean }): void;
  updateValueAndValidity(opts: { onlySelf?: boolean; emitEvent?: boolean }): void;
  setErrors(errors: ValidationErrors, opts: { emitEvent?: boolean }): void;
  getError(errorCode: string, path?: string | (string | number)[]): any;
  hasError(errorCode: string, path?: string | (string | number)[]): boolean;
  getOldValue(): TValue;
}
interface IProxyGroup<TValue, TControl, TFields> {
  parent: IProxyArray<TValue, TControl, TFields> | IProxyGroup<TValue, TControl, TFields> | null;
  controls: {
    [key: string]:
      | IProxyArray<TValue, TControl, TFields>
      | IProxyGroup<TValue, TControl, TFields>
      | IProxyControl<TValue, TFields>;
  };

  value: TValue;
  valueIsChanged: boolean;
  status: string;
  dirty: boolean;
  disabled: boolean;
  valid: boolean;
  invalid: boolean;
  pending: boolean;
  enabled: boolean;
  disableState: boolean;
  setValue(
    value: TValue,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    },
  ): void;
  patchValue(
    value: TValue,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    },
  ): void;
  reset(formState?: TValue | FormControlState<TValue>, options?: { onlySelf?: boolean; emitEvent?: boolean }): void;
  addControl(name: string, control: TControl, options: { emitEvent?: boolean }): void;
  setControl(name: string, control: IProxyControl<TValue, TFields>, options: { emitEvent?: boolean }): void;
  removeControl(name: UPath, options: { emitEvent?: boolean }): void;
  addValidators(validators: ValidatorFn | ValidatorFn[]): void;
  addAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void;
  removeValidators(validators: ValidatorFn | ValidatorFn[]): void;
  removeAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void;
  setName(name: string): void;
  getName(): string;
  getPath(): UPath;
  getFullPath(): UPath;
  setDisableState(disabled: boolean): void;
}

interface IProxyArray<TValue, TControl, TFields> {
  parent: IProxyGroup<TValue, TControl, TFields> | IProxyArray<TValue, TControl, TFields> | null;
  readonly field: TFields;
  length: number;
  controls: {
    [key: string]:
      | IProxyArray<TValue, TControl, TFields>
      | IProxyGroup<TValue, TControl, TFields>
      | IProxyControl<TValue, TFields>;
  };
  value: TValue;
  valueIsChanged: boolean;
  dirty: boolean;
  disabled: boolean;
  valid: boolean;
  invalid: boolean;
  pending: boolean;
  enabled: boolean;
  disableState: boolean;
  at(index: number): TControl;
  push(control: TControl, options: { emitEvent?: boolean }): void;
  insert(index: number, control: TControl, options: { emitEvent?: boolean }): void;
  removeAt(index: number, options: { emitEvent?: boolean }): void;
  setValue(
    value: TValue,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    },
  ): void;
  patchValue(
    value: TValue,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    },
  ): void;
  reset(formState?: TValue | FormControlState<TValue>, options?: { onlySelf?: boolean; emitEvent?: boolean }): void;
  addControl(name: string, control: TControl, options: { emitEvent?: boolean }): void;
  setControl(name: string, control: IProxyControl<TValue, TFields>, options: { emitEvent?: boolean }): void;
  removeControl(name: UPath, options: { emitEvent?: boolean }): void;
  addValidators(validators: ValidatorFn | ValidatorFn[]): void;
  addAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void;
  removeValidators(validators: ValidatorFn | ValidatorFn[]): void;
  removeAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[]): void;
  setName(name: string): void;
  getName(): string;
  getFullPath(): UPath;
  setDisableState(disabled: boolean): void;
}
