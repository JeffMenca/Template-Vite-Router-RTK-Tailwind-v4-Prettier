import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";

/**
 * Typed version of useDispatch hook
 * @returns {AppDispatch} Typed dispatch function
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/**
 * Typed version of useSelector hook
 * @returns {RootState} Typed state selector
 */
export const useAppSelector = useSelector.withTypes<RootState>();
