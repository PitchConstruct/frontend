import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/@mantine/form/esm/use-form.mjs
var import_react2 = __toESM(require_react(), 1);
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);

// node_modules/@mantine/form/esm/filter-errors/filter-errors.mjs
function filterErrors(errors) {
  if (errors === null || typeof errors !== "object") {
    return {};
  }
  return Object.keys(errors).reduce((acc, key) => {
    const errorValue = errors[key];
    if (errorValue !== void 0 && errorValue !== null && errorValue !== false) {
      acc[key] = errorValue;
    }
    return acc;
  }, {});
}

// node_modules/@mantine/form/esm/lists/clear-list-state.mjs
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function clearListState(field, state) {
  if (state === null || typeof state !== "object") {
    return {};
  }
  const clone = __spreadValues({}, state);
  Object.keys(state).forEach((errorKey) => {
    if (errorKey.includes(`${String(field)}.`)) {
      delete clone[errorKey];
    }
  });
  return clone;
}

// node_modules/@mantine/form/esm/form-index.mjs
var FORM_INDEX = "__MANTINE_FORM_INDEX__";

// node_modules/@mantine/form/esm/validate/should-validate-on-change.mjs
function shouldValidateOnChange(path, validateInputOnChange) {
  if (!validateInputOnChange) {
    return false;
  }
  if (typeof validateInputOnChange === "boolean") {
    return validateInputOnChange;
  }
  if (Array.isArray(validateInputOnChange)) {
    return validateInputOnChange.includes(path.replace(/[.][0-9]/g, `.${FORM_INDEX}`));
  }
  return false;
}

// node_modules/klona/full/index.mjs
function set(obj, key, val) {
  if (typeof val.value === "object")
    val.value = klona(val.value);
  if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === "__proto__") {
    Object.defineProperty(obj, key, val);
  } else
    obj[key] = val.value;
}
function klona(x) {
  if (typeof x !== "object")
    return x;
  var i = 0, k, list, tmp, str = Object.prototype.toString.call(x);
  if (str === "[object Object]") {
    tmp = Object.create(x.__proto__ || null);
  } else if (str === "[object Array]") {
    tmp = Array(x.length);
  } else if (str === "[object Set]") {
    tmp = /* @__PURE__ */ new Set();
    x.forEach(function(val) {
      tmp.add(klona(val));
    });
  } else if (str === "[object Map]") {
    tmp = /* @__PURE__ */ new Map();
    x.forEach(function(val, key) {
      tmp.set(klona(key), klona(val));
    });
  } else if (str === "[object Date]") {
    tmp = /* @__PURE__ */ new Date(+x);
  } else if (str === "[object RegExp]") {
    tmp = new RegExp(x.source, x.flags);
  } else if (str === "[object DataView]") {
    tmp = new x.constructor(klona(x.buffer));
  } else if (str === "[object ArrayBuffer]") {
    tmp = x.slice(0);
  } else if (str.slice(-6) === "Array]") {
    tmp = new x.constructor(x);
  }
  if (tmp) {
    for (list = Object.getOwnPropertySymbols(x); i < list.length; i++) {
      set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
    }
    for (i = 0, list = Object.getOwnPropertyNames(x); i < list.length; i++) {
      if (Object.hasOwnProperty.call(tmp, k = list[i]) && tmp[k] === x[k])
        continue;
      set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
    }
  }
  return tmp || x;
}

// node_modules/@mantine/form/esm/paths/get-splitted-path.mjs
function getSplittedPath(path) {
  if (typeof path !== "string") {
    return [];
  }
  return path.split(".");
}

// node_modules/@mantine/form/esm/paths/set-path.mjs
function setPath(path, value, values) {
  const splittedPath = getSplittedPath(path);
  if (splittedPath.length === 0) {
    return values;
  }
  const cloned = klona(values);
  if (splittedPath.length === 1) {
    cloned[splittedPath[0]] = value;
    return cloned;
  }
  let val = cloned[splittedPath[0]];
  for (let i = 1; i < splittedPath.length - 1; i += 1) {
    if (val === void 0) {
      return cloned;
    }
    val = val[splittedPath[i]];
  }
  val[splittedPath[splittedPath.length - 1]] = value;
  return cloned;
}

// node_modules/@mantine/form/esm/paths/get-path.mjs
function getPath(path, values) {
  const splittedPath = getSplittedPath(path);
  if (splittedPath.length === 0 || typeof values !== "object" || values === null) {
    return void 0;
  }
  let value = values[splittedPath[0]];
  for (let i = 1; i < splittedPath.length; i += 1) {
    if (value === void 0) {
      break;
    }
    value = value[splittedPath[i]];
  }
  return value;
}

// node_modules/@mantine/form/esm/validate/validate-values.mjs
function getValidationResults(errors) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}
function validateRulesRecord(rules, values, path = "", errors = {}) {
  if (typeof rules !== "object" || rules === null) {
    return errors;
  }
  return Object.keys(rules).reduce((acc, ruleKey) => {
    const rule = rules[ruleKey];
    const rulePath = `${path === "" ? "" : `${path}.`}${ruleKey}`;
    const value = getPath(rulePath, values);
    let arrayValidation = false;
    if (typeof rule === "function") {
      acc[rulePath] = rule(value, values, rulePath);
    }
    if (typeof rule === "object" && Array.isArray(value)) {
      arrayValidation = true;
      value.forEach(
        (_item, index) => validateRulesRecord(rule, values, `${rulePath}.${index}`, acc)
      );
    }
    if (typeof rule === "object" && typeof value === "object" && value !== null) {
      if (!arrayValidation) {
        validateRulesRecord(rule, values, rulePath, acc);
      }
    }
    return acc;
  }, errors);
}
function validateValues(validate, values) {
  if (typeof validate === "function") {
    return getValidationResults(validate(values));
  }
  return getValidationResults(validateRulesRecord(validate, values));
}

// node_modules/@mantine/form/esm/validate/validate-field-value.mjs
function validateFieldValue(path, rules, values) {
  if (typeof path !== "string") {
    return { hasError: false, error: null };
  }
  const results = validateValues(rules, values);
  const pathInError = Object.keys(results.errors).find(
    (errorKey) => path.split(".").every((pathPart, i) => pathPart === errorKey.split(".")[i])
  );
  return { hasError: !!pathInError, error: pathInError ? results.errors[pathInError] : null };
}

// node_modules/@mantine/form/esm/paths/reorder-path.mjs
function reorderPath(path, { from, to }, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  const cloned = [...currentValue];
  const item = currentValue[from];
  cloned.splice(from, 1);
  cloned.splice(to, 0, item);
  return setPath(path, cloned, values);
}

// node_modules/@mantine/form/esm/lists/reorder-errors.mjs
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
function reorderErrors(path, { from, to }, errors) {
  const oldKeyStart = `${path}.${from}`;
  const newKeyStart = `${path}.${to}`;
  const clone = __spreadValues2({}, errors);
  Object.keys(errors).every((key) => {
    let oldKey;
    let newKey;
    if (key.startsWith(oldKeyStart)) {
      oldKey = key;
      newKey = key.replace(oldKeyStart, newKeyStart);
    }
    if (key.startsWith(newKeyStart)) {
      oldKey = key.replace(newKeyStart, oldKeyStart);
      newKey = key;
    }
    if (oldKey && newKey) {
      const value1 = clone[oldKey];
      const value2 = clone[newKey];
      value2 === void 0 ? delete clone[oldKey] : clone[oldKey] = value2;
      value1 === void 0 ? delete clone[newKey] : clone[newKey] = value1;
      return false;
    }
    return true;
  });
  return clone;
}

// node_modules/@mantine/form/esm/paths/remove-path.mjs
function removePath(path, index, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  return setPath(
    path,
    currentValue.filter((_, itemIndex) => itemIndex !== index),
    values
  );
}

// node_modules/@mantine/form/esm/lists/change-error-indices.mjs
var __defProp3 = Object.defineProperty;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp3(a, prop, b[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b)) {
      if (__propIsEnum3.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    }
  return a;
};
function getIndexFromKeyAfterPath(key, path) {
  const split = key.substring(path.length + 1).split(".")[0];
  return parseInt(split, 10);
}
function changeErrorIndices(path, index, errors, change) {
  if (index === void 0) {
    return errors;
  }
  const pathString = `${String(path)}`;
  let clearedErrors = errors;
  if (change === -1) {
    clearedErrors = clearListState(`${pathString}.${index}`, clearedErrors);
  }
  const cloned = __spreadValues3({}, clearedErrors);
  const changedKeys = /* @__PURE__ */ new Set();
  Object.entries(clearedErrors).filter(([key]) => {
    if (!key.startsWith(`${pathString}.`)) {
      return false;
    }
    const currIndex = getIndexFromKeyAfterPath(key, pathString);
    if (Number.isNaN(currIndex)) {
      return false;
    }
    return currIndex >= index;
  }).forEach(([key, value]) => {
    const currIndex = getIndexFromKeyAfterPath(key, pathString);
    const newKey = key.replace(
      `${pathString}.${currIndex}`,
      `${pathString}.${currIndex + change}`
    );
    cloned[newKey] = value;
    changedKeys.add(newKey);
    if (!changedKeys.has(key)) {
      delete cloned[key];
    }
  });
  return cloned;
}

// node_modules/@mantine/form/esm/paths/insert-path.mjs
function insertPath(path, value, index, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  const cloned = [...currentValue];
  cloned.splice(typeof index === "number" ? index : cloned.length, 0, value);
  return setPath(path, cloned, values);
}

// node_modules/@mantine/form/esm/get-status/get-status.mjs
function getStatus(status, path) {
  const paths = Object.keys(status);
  if (typeof path === "string") {
    const nestedPaths = paths.filter((statusPath) => statusPath.startsWith(`${path}.`));
    return status[path] || nestedPaths.some((statusPath) => status[statusPath]) || false;
  }
  return paths.some((statusPath) => status[statusPath]);
}

// node_modules/@mantine/form/esm/actions/actions.mjs
var import_react = __toESM(require_react(), 1);
function dispatchEvent(type, detail) {
  window.dispatchEvent(new CustomEvent(type, { detail }));
}
function validateFormName(name) {
  if (!/^[0-9a-zA-Z-]+$/.test(name)) {
    throw new Error(
      `[@mantine/use-form] Form name "${name}" is invalid, it should contain only letters, numbers and dashes`
    );
  }
}
var useIsomorphicEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function createFormActions(name) {
  validateFormName(name);
  const setFieldValue = (path, value) => dispatchEvent(`mantine-form:${name}:set-field-value`, { path, value });
  const setValues = (values) => dispatchEvent(`mantine-form:${name}:set-values`, values);
  const setInitialValues = (values) => dispatchEvent(`mantine-form:${name}:set-initial-values`, values);
  const setErrors = (errors) => dispatchEvent(`mantine-form:${name}:set-errors`, errors);
  const setFieldError = (path, error) => dispatchEvent(`mantine-form:${name}:set-field-error`, { path, error });
  const clearFieldError = (path) => dispatchEvent(`mantine-form:${name}:clear-field-error`, path);
  const clearErrors = () => dispatchEvent(`mantine-form:${name}:clear-errors`);
  const reset = () => dispatchEvent(`mantine-form:${name}:reset`);
  const validate = () => dispatchEvent(`mantine-form:${name}:validate`);
  const validateField = (path) => dispatchEvent(`mantine-form:${name}:validate-field`, path);
  const reorderListItem = (path, payload) => dispatchEvent(`mantine-form:${name}:reorder-list-item`, { path, payload });
  const removeListItem = (path, index) => dispatchEvent(`mantine-form:${name}:remove-list-item`, { path, index });
  const insertListItem = (path, item, index) => dispatchEvent(`mantine-form:${name}:insert-list-item`, { path, index, item });
  const setDirty = (value) => dispatchEvent(`mantine-form:${name}:set-dirty`, value);
  const setTouched = (value) => dispatchEvent(`mantine-form:${name}:set-touched`, value);
  const resetDirty = (values) => dispatchEvent(`mantine-form:${name}:reset-dirty`, values);
  const resetTouched = () => dispatchEvent(`mantine-form:${name}:reset-touched`);
  return {
    setFieldValue,
    setValues,
    setInitialValues,
    setErrors,
    setFieldError,
    clearFieldError,
    clearErrors,
    reset,
    validate,
    validateField,
    reorderListItem,
    removeListItem,
    insertListItem,
    setDirty,
    setTouched,
    resetDirty,
    resetTouched
  };
}
function useFormEvent(eventKey, handler) {
  useIsomorphicEffect(() => {
    if (eventKey) {
      window.addEventListener(eventKey, handler);
      return () => window.removeEventListener(eventKey, handler);
    }
    return void 0;
  }, [eventKey]);
}
function useFormActions(name, form) {
  if (name) {
    validateFormName(name);
  }
  useFormEvent(
    `mantine-form:${name}:set-field-value`,
    (event) => form.setFieldValue(event.detail.path, event.detail.value)
  );
  useFormEvent(
    `mantine-form:${name}:set-values`,
    (event) => form.setValues(event.detail)
  );
  useFormEvent(
    `mantine-form:${name}:set-initial-values`,
    (event) => form.setInitialValues(event.detail)
  );
  useFormEvent(
    `mantine-form:${name}:set-errors`,
    (event) => form.setErrors(event.detail)
  );
  useFormEvent(
    `mantine-form:${name}:set-field-error`,
    (event) => form.setFieldError(event.detail.path, event.detail.error)
  );
  useFormEvent(
    `mantine-form:${name}:clear-field-error`,
    (event) => form.clearFieldError(event.detail)
  );
  useFormEvent(`mantine-form:${name}:clear-errors`, form.clearErrors);
  useFormEvent(`mantine-form:${name}:reset`, form.reset);
  useFormEvent(`mantine-form:${name}:validate`, form.validate);
  useFormEvent(
    `mantine-form:${name}:validate-field`,
    (event) => form.validateField(event.detail)
  );
  useFormEvent(
    `mantine-form:${name}:reorder-list-item`,
    (event) => form.reorderListItem(event.detail.path, event.detail.payload)
  );
  useFormEvent(
    `mantine-form:${name}:remove-list-item`,
    (event) => form.removeListItem(event.detail.path, event.detail.index)
  );
  useFormEvent(
    `mantine-form:${name}:insert-list-item`,
    (event) => form.insertListItem(event.detail.path, event.detail.item, event.detail.index)
  );
  useFormEvent(
    `mantine-form:${name}:set-dirty`,
    (event) => form.setDirty(event.detail)
  );
  useFormEvent(
    `mantine-form:${name}:set-touched`,
    (event) => form.setTouched(event.detail)
  );
  useFormEvent(
    `mantine-form:${name}:reset-dirty`,
    (event) => form.resetDirty(event.detail)
  );
  useFormEvent(`mantine-form:${name}:reset-touched`, form.resetTouched);
}

// node_modules/@mantine/form/esm/get-input-on-change/get-input-on-change.mjs
function getInputOnChange(setValue) {
  return (val) => {
    if (!val) {
      setValue(val);
    } else if (typeof val === "function") {
      setValue(val);
    } else if (typeof val === "object" && "nativeEvent" in val) {
      const { currentTarget } = val;
      if (currentTarget instanceof HTMLInputElement) {
        if (currentTarget.type === "checkbox") {
          setValue(currentTarget.checked);
        } else {
          setValue(currentTarget.value);
        }
      } else if (currentTarget instanceof HTMLTextAreaElement || currentTarget instanceof HTMLSelectElement) {
        setValue(currentTarget.value);
      }
    } else {
      setValue(val);
    }
  };
}

// node_modules/@mantine/form/esm/use-form.mjs
var __defProp4 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
var __hasOwnProp4 = Object.prototype.hasOwnProperty;
var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp4.call(b, prop))
      __defNormalProp4(a, prop, b[prop]);
  if (__getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(b)) {
      if (__propIsEnum4.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function useForm({
  name,
  initialValues = {},
  initialErrors = {},
  initialDirty = {},
  initialTouched = {},
  clearInputErrorOnChange = true,
  validateInputOnChange = false,
  validateInputOnBlur = false,
  onValuesChange,
  transformValues = (values) => values,
  validate: rules
} = {}) {
  const [touched, setTouched] = (0, import_react2.useState)(initialTouched);
  const [dirty, setDirty] = (0, import_react2.useState)(initialDirty);
  const [values, _setValues] = (0, import_react2.useState)(initialValues);
  const [errors, _setErrors] = (0, import_react2.useState)(filterErrors(initialErrors));
  const valuesSnapshot = (0, import_react2.useRef)(initialValues);
  const setValuesSnapshot = (_values) => {
    valuesSnapshot.current = _values;
  };
  const resetTouched = (0, import_react2.useCallback)(() => setTouched({}), []);
  const resetDirty = (_values) => {
    const newSnapshot = _values ? __spreadValues4(__spreadValues4({}, values), _values) : values;
    setValuesSnapshot(newSnapshot);
    setDirty({});
  };
  const setErrors = (0, import_react2.useCallback)(
    (errs) => _setErrors((current) => filterErrors(typeof errs === "function" ? errs(current) : errs)),
    []
  );
  const clearErrors = (0, import_react2.useCallback)(() => _setErrors({}), []);
  const reset = (0, import_react2.useCallback)(() => {
    _setValues(valuesSnapshot.current);
    clearErrors();
    setDirty({});
    resetTouched();
  }, []);
  const setFieldError = (0, import_react2.useCallback)(
    (path, error) => setErrors((current) => __spreadProps(__spreadValues4({}, current), { [path]: error })),
    []
  );
  const clearFieldError = (0, import_react2.useCallback)(
    (path) => setErrors((current) => {
      if (typeof path !== "string") {
        return current;
      }
      const clone = __spreadValues4({}, current);
      delete clone[path];
      return clone;
    }),
    []
  );
  const clearFieldDirty = (0, import_react2.useCallback)(
    (path) => setDirty((current) => {
      if (typeof path !== "string") {
        return current;
      }
      const result = clearListState(path, current);
      delete result[path];
      return result;
    }),
    []
  );
  const setFieldValue = (0, import_react2.useCallback)((path, value) => {
    const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);
    clearFieldDirty(path);
    setTouched((currentTouched) => __spreadProps(__spreadValues4({}, currentTouched), { [path]: true }));
    _setValues((current) => {
      const result = setPath(path, value, current);
      if (shouldValidate) {
        const validationResults = validateFieldValue(path, rules, result);
        validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
      }
      onValuesChange == null ? void 0 : onValuesChange(result);
      return result;
    });
    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);
  const setValues = (0, import_react2.useCallback)((payload) => {
    _setValues((currentValues) => {
      const valuesPartial = typeof payload === "function" ? payload(currentValues) : payload;
      const result = __spreadValues4(__spreadValues4({}, currentValues), valuesPartial);
      onValuesChange == null ? void 0 : onValuesChange(result);
      return result;
    });
    clearInputErrorOnChange && clearErrors();
  }, []);
  const reorderListItem = (0, import_react2.useCallback)((path, payload) => {
    clearFieldDirty(path);
    _setValues((current) => {
      const result = reorderPath(path, payload, current);
      onValuesChange == null ? void 0 : onValuesChange(result);
      return result;
    });
    _setErrors((errs) => reorderErrors(path, payload, errs));
  }, []);
  const removeListItem = (0, import_react2.useCallback)((path, index) => {
    clearFieldDirty(path);
    _setValues((current) => {
      const result = removePath(path, index, current);
      onValuesChange == null ? void 0 : onValuesChange(result);
      return result;
    });
    _setErrors((errs) => changeErrorIndices(path, index, errs, -1));
  }, []);
  const insertListItem = (0, import_react2.useCallback)((path, item, index) => {
    clearFieldDirty(path);
    _setValues((current) => {
      const result = insertPath(path, item, index, current);
      onValuesChange == null ? void 0 : onValuesChange(result);
      return result;
    });
    _setErrors((errs) => changeErrorIndices(path, index, errs, 1));
  }, []);
  const validate = (0, import_react2.useCallback)(() => {
    const results = validateValues(rules, values);
    _setErrors(results.errors);
    return results;
  }, [values, rules]);
  const validateField = (0, import_react2.useCallback)(
    (path) => {
      const results = validateFieldValue(path, rules, values);
      results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
      return results;
    },
    [values, rules]
  );
  const getInputProps = (path, { type = "input", withError = true, withFocus = true } = {}) => {
    const onChange = getInputOnChange((value) => setFieldValue(path, value));
    const payload = { onChange };
    if (withError) {
      payload.error = errors[path];
    }
    if (type === "checkbox") {
      payload.checked = getPath(path, values);
    } else {
      payload.value = getPath(path, values);
    }
    if (withFocus) {
      payload.onFocus = () => setTouched((current) => __spreadProps(__spreadValues4({}, current), { [path]: true }));
      payload.onBlur = () => {
        if (shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue(path, rules, values);
          validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
        }
      };
    }
    return payload;
  };
  const onSubmit = (handleSubmit, handleValidationFailure) => (event) => {
    event == null ? void 0 : event.preventDefault();
    const results = validate();
    if (results.hasErrors) {
      handleValidationFailure == null ? void 0 : handleValidationFailure(results.errors, values, event);
    } else {
      handleSubmit == null ? void 0 : handleSubmit(transformValues(values), event);
    }
  };
  const getTransformedValues = (input) => transformValues(input || values);
  const onReset = (0, import_react2.useCallback)((event) => {
    event.preventDefault();
    reset();
  }, []);
  const isDirty = (path) => {
    if (path) {
      const overriddenValue = getPath(path, dirty);
      if (typeof overriddenValue === "boolean") {
        return overriddenValue;
      }
      const sliceOfValues = getPath(path, values);
      const sliceOfInitialValues = getPath(path, valuesSnapshot.current);
      return !(0, import_fast_deep_equal.default)(sliceOfValues, sliceOfInitialValues);
    }
    const isOverridden = Object.keys(dirty).length > 0;
    if (isOverridden) {
      return getStatus(dirty);
    }
    return !(0, import_fast_deep_equal.default)(values, valuesSnapshot.current);
  };
  const isTouched = (0, import_react2.useCallback)(
    (path) => getStatus(touched, path),
    [touched]
  );
  const isValid = (0, import_react2.useCallback)(
    (path) => path ? !validateFieldValue(path, rules, values).hasError : !validateValues(rules, values).hasErrors,
    [values, rules]
  );
  const form = {
    values,
    errors,
    setValues,
    setInitialValues: setValuesSnapshot,
    setErrors,
    setFieldValue,
    setFieldError,
    clearFieldError,
    clearErrors,
    reset,
    validate,
    validateField,
    reorderListItem,
    removeListItem,
    insertListItem,
    getInputProps,
    onSubmit,
    onReset,
    isDirty,
    isTouched,
    setTouched,
    setDirty,
    resetTouched,
    resetDirty,
    isValid,
    getTransformedValues
  };
  useFormActions(name, form);
  return form;
}

// node_modules/@mantine/form/esm/FormProvider/FormProvider.mjs
var import_react3 = __toESM(require_react(), 1);
function createFormContext() {
  const FormContext = (0, import_react3.createContext)(null);
  function FormProvider({ form, children }) {
    return import_react3.default.createElement(FormContext.Provider, { value: form }, children);
  }
  function useFormContext() {
    const ctx = (0, import_react3.useContext)(FormContext);
    if (!ctx) {
      throw new Error("useFormContext was called outside of FormProvider context");
    }
    return ctx;
  }
  return [FormProvider, useFormContext, useForm];
}

// node_modules/@mantine/form/esm/Form/Form.mjs
var import_react4 = __toESM(require_react(), 1);
var __defProp5 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols5 = Object.getOwnPropertySymbols;
var __hasOwnProp5 = Object.prototype.hasOwnProperty;
var __propIsEnum5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp5 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp5.call(b, prop))
      __defNormalProp5(a, prop, b[prop]);
  if (__getOwnPropSymbols5)
    for (var prop of __getOwnPropSymbols5(b)) {
      if (__propIsEnum5.call(b, prop))
        __defNormalProp5(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols5)
    for (var prop of __getOwnPropSymbols5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Form = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { form, onSubmit, onReset } = _b, others = __objRest(_b, ["form", "onSubmit", "onReset"]);
    return import_react4.default.createElement(
      "form",
      __spreadProps2(__spreadValues5({}, others), {
        onSubmit: form.onSubmit(typeof onSubmit === "function" ? onSubmit : () => {
        }),
        onReset: (event) => {
          onReset == null ? void 0 : onReset(event);
          form.onReset(event);
        },
        ref
      })
    );
  }
);

// node_modules/@mantine/form/esm/resolvers/zod-resolver/zod-resolver.mjs
function zodResolver(schema) {
  return (values) => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      return {};
    }
    const results = {};
    parsed.error.errors.forEach((error) => {
      results[error.path.join(".")] = error.message;
    });
    return results;
  };
}

// node_modules/@mantine/form/esm/resolvers/superstruct-resolver/superstruct-resolver.mjs
function superstructResolver(schema) {
  function structValidation(values) {
    const formErrors = {};
    const [err] = schema.validate(values);
    if (!err) {
      return formErrors;
    }
    err.failures().forEach((fieldFailure) => {
      const fieldName = fieldFailure.path.join(" ");
      formErrors[fieldFailure.path.join(".")] = `${fieldName}: ${fieldFailure.message}`;
    });
    return formErrors;
  }
  return structValidation;
}

// node_modules/@mantine/form/esm/resolvers/yup-resolver/yup-resolver.mjs
function yupResolver(schema) {
  const _schema = schema;
  return (values) => {
    try {
      _schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (_yupError) {
      const yupError = _yupError;
      const results = {};
      yupError.inner.forEach((error) => {
        results[error.path.replaceAll("[", ".").replaceAll("]", "")] = error.message;
      });
      return results;
    }
  };
}

// node_modules/@mantine/form/esm/resolvers/joi-resolver/joi-resolver.mjs
var __defProp6 = Object.defineProperty;
var __getOwnPropSymbols6 = Object.getOwnPropertySymbols;
var __hasOwnProp6 = Object.prototype.hasOwnProperty;
var __propIsEnum6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp6 = (obj, key, value) => key in obj ? __defProp6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp6.call(b, prop))
      __defNormalProp6(a, prop, b[prop]);
  if (__getOwnPropSymbols6)
    for (var prop of __getOwnPropSymbols6(b)) {
      if (__propIsEnum6.call(b, prop))
        __defNormalProp6(a, prop, b[prop]);
    }
  return a;
};
function joiResolver(schema, options) {
  const _schema = schema;
  return (values) => {
    const parsed = _schema.validate(values, __spreadValues6({ abortEarly: false }, options));
    if (!parsed.error) {
      return {};
    }
    const results = {};
    parsed.error.details.forEach((error) => {
      results[error.path.join(".")] = error.message;
    });
    return results;
  };
}

// node_modules/@mantine/form/esm/validators/is-not-empty/is-not-empty.mjs
function isNotEmpty(error) {
  const _error = error || true;
  return (value) => {
    if (typeof value === "string") {
      return value.trim().length > 0 ? null : _error;
    }
    if (Array.isArray(value)) {
      return value.length > 0 ? null : _error;
    }
    if (value === null || value === void 0) {
      return _error;
    }
    if (value === false) {
      return _error;
    }
    return null;
  };
}

// node_modules/@mantine/form/esm/validators/matches/matches.mjs
function matches(regexp, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value !== "string") {
      return _error;
    }
    return regexp.test(value) ? null : _error;
  };
}

// node_modules/@mantine/form/esm/validators/is-email/is-email.mjs
function isEmail(error) {
  return matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, error);
}

// node_modules/@mantine/form/esm/validators/has-length/has-length.mjs
function isLengthValid(payload, value) {
  if (typeof payload === "number") {
    return value.length === payload;
  }
  const { max, min } = payload;
  let valid = true;
  if (typeof max === "number" && value.length > max) {
    valid = false;
  }
  if (typeof min === "number" && value.length < min) {
    valid = false;
  }
  return valid;
}
function hasLength(payload, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value === "string") {
      return isLengthValid(payload, value.trim()) ? null : _error;
    }
    if (typeof value === "object" && value !== null && "length" in value) {
      return isLengthValid(payload, value) ? null : _error;
    }
    return _error;
  };
}

// node_modules/@mantine/form/esm/validators/is-in-range/is-in-range.mjs
function isInRange({ min, max }, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value !== "number") {
      return _error;
    }
    let valid = true;
    if (typeof min === "number" && value < min) {
      valid = false;
    }
    if (typeof max === "number" && value > max) {
      valid = false;
    }
    return valid ? null : _error;
  };
}

// node_modules/@mantine/form/esm/validators/matches-field/matches-field.mjs
function matchesField(field, error) {
  const _error = error || true;
  return (value, values) => {
    if (!values || !(field in values)) {
      return _error;
    }
    return value === values[field] ? null : _error;
  };
}
export {
  FORM_INDEX,
  Form,
  createFormActions,
  createFormContext,
  hasLength,
  isEmail,
  isInRange,
  isNotEmpty,
  joiResolver,
  matches,
  matchesField,
  superstructResolver,
  useForm,
  yupResolver,
  zodResolver
};
//# sourceMappingURL=@mantine_form.js.map
