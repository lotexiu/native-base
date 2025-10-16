import { isEmptyObj } from "@tsn-object/generic/implementations";
import { ariaAttr } from "@tsrn/acessibility/accessibilityUtils";
import { addTextAndPropsToStrings } from "@tsrn/children/addTextAndPropsToStrings";
import getAbsoluteChildren from "@tsrn/children/getAbsoluteChildren";
import getAttachedChildren from "@tsrn/children/getAttachedChildren";
import getSpacedChildren from "@tsrn/children/getSpacedChildren"
import { createContext } from "@tsrn/context/createContext";
import { useKeyboardBottomInset } from "@tsrn/hooks/useKeyboardBottomInset";
import { combineContextAndProps } from "@tsrn/object/combineContextAndProps";
import { canUseDom } from "@tsrn/platform/canUseDom";
import { mergeRefs, composeEventHandlers } from "@tsrn/refs/mergeRefs";
import { IAccessibilityProps } from "@tsrn/types/accessibilityTypes";

export {
  getSpacedChildren,
  getAbsoluteChildren,
  getAttachedChildren,
  addTextAndPropsToStrings,
  canUseDom,
  mergeRefs,
  composeEventHandlers,
  combineContextAndProps,
  IAccessibilityProps,
  ariaAttr,
  createContext,
  useKeyboardBottomInset,
  isEmptyObj,
};