import {Perfume} from "../../types/types";
import {
    LOADING_PERFUME,
    FETCH_PERFUMES,
    FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS,
    FETCH_PERFUMES_BY_GENDER_SUCCESS,
    FETCH_PERFUMES_BY_PERFUMER_SUCCESS,
    FETCH_PERFUMES_BY_QUERY_SUCCESS,
    FetchPerfumesByQuerySuccessActionType,
    FetchPerfumesByFilterParamsSuccessActionType,
    FetchPerfumesByGenderSuccessActionType,
    FetchPerfumesByPerfumerSuccessActionType,
    GetPerfumesActionType,
    LoadingPerfumeActionType
} from "./perfumes-action-types";

export const loadingPerfume = (): LoadingPerfumeActionType => ({
    type: LOADING_PERFUME
});

export const getPerfumes = (perfumes: Array<Perfume>): GetPerfumesActionType => ({
    type: FETCH_PERFUMES,
    payload: perfumes
});

export const fetchPerfumesByQuerySuccess = (perfumes: Array<Perfume>): FetchPerfumesByQuerySuccessActionType => ({
    type: FETCH_PERFUMES_BY_QUERY_SUCCESS,
    payload: perfumes
});

export const fetchPerfumesByGenderSuccess = (perfumes: Array<Perfume>): FetchPerfumesByGenderSuccessActionType => ({
    type: FETCH_PERFUMES_BY_GENDER_SUCCESS,
    payload: perfumes
});

export const fetchPerfumesByPerfumerSuccess = (perfumes: Array<Perfume>): FetchPerfumesByPerfumerSuccessActionType => ({
    type: FETCH_PERFUMES_BY_PERFUMER_SUCCESS,
    payload: perfumes
});

export const fetchPerfumesByFilterParamsSuccess = (perfumes: Array<Perfume>): FetchPerfumesByFilterParamsSuccessActionType => ({
    type: FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS,
    payload: perfumes
});