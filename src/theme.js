import {createContext, useState, useMemo } from 'react';
import {createTheme} from "@mui/material/styles";

// color design tokens







export const tokens = (mode) => ({
    ...(mode ==='dark'
        ? {
            jaune: {
                100: "#313129",
                200: "#636253",
                300: "#94947c",
                400: "#c6c5a6",
                500: "#f7f6cf",
                600: "#f9f8d9",
                700: "#fafae2",
                800: "#fcfbec",
                900: "#fdfdf5",
            },
            bleuClair: {
                100: "#242b30",
                200: "#495661",
                300: "#6d8291",
                400: "#92adc2",
                500: "#b6d8f2",
                600: "#c5e0f5",
                700: "#d3e8f7",
                800: "#e2effa",
                900: "#f0f7fc",
            },
            rose: {
                100: "#31292d",
                200: "#625359",
                300: "#927c86",
                400: "#c3a6b2",
                500: "#f4cfdf",
                600: "#f6d9e5",
                700: "#f8e2ec",
                800: "#fbecf2",
                900: "#fdf5f9",
            },
            bleuFonce: {
                100: "#111a25",
                200: "#23354a",
                300: "#344f70",
                400: "#466a95",
                500: "#5784ba",
                600: "#799dc8",
                700: "#9ab5d6",
                800: "#bccee3",
                900: "#dde6f1",
            },
        } 
        :{
            jaune: {
                100: "#fdfdf5",
                200: "#fcfbec",
                300: "#fafae2",
                400: "#f9f8d9",
                500: "#f7f6cf",
                600: "#c6c5a6",
                700: "#94947c",
                800: "#636253",
                900: "#313129"
            },
            bleuClair: {
                100: "#f0f7fc",
                200: "#e2effa",
                300: "#d3e8f7",
                400: "#c5e0f5",
                500: "#b6d8f2",
                600: "#92adc2",
                700: "#6d8291",
                800: "#495661",
                900: "#242b30"
            },
            rose: {
                100: "#fdf5f9",
                200: "#fbecf2",
                300: "#f8e2ec",
                400: "#f6d9e5",
                500: "#f4cfdf",
                600: "#c3a6b2",
                700: "#927c86",
                800: "#625359",
                900: "#31292d"
            },
            bleuFonce: {
                100: "#dde6f1",
                200: "#bccee3",
                300: "#9ab5d6",
                400: "#799dc8",
                500: "#5784ba",
                600: "#466a95",
                700: "#344f70",
                800: "#23354a",
                900: "#111a25"
            },

        }),

});

// mui theme settings
export const themeSettings = (mode) => {
    const colors=tokens(mode);

    return {
        palette : {
            mode:mode,
            ...(mode === 'dark')
        ?{
            primary: {
                main:colors.bleuFonce[500],
            },
            secondary:{
                main:colors.bleuFonce[500],
            },
            neutral:{
                dark: colors.rose[700],
                main:colors.rose[500],
                light:colors.rose[100]
            },
            background:{
                default:colors.rose[500],
            }
        }:{
            primary: {
                main:colors.bleuClair[100],
            },
            secondary:{
                main:colors.rose[500],
            },
            neutral:{
                dark: colors.jaune[700],
                main:colors.jaune[500],
                light:colors.jaune[100]
            },
            background:{
                default:colors.rose[500],
            },
        }
        },
        typography:{
            fontFamily: ['Roboto',"san-serif"].join(','),
            fontSize:12,
            h1:{
                fontFamily: ['Roboto',"san-serif"].join(','),
                fontSize:40,
            },
            h2:{
                fontFamily: ['Roboto',"san-serif"].join(','),
                fontSize:32,
            },
            h3:{
                fontFamily: ['Roboto',"san-serif"].join(','),
                fontSize:24,
            },
            h4:{
                fontFamily: ['Roboto',"san-serif"].join(','),
                fontSize:20,
            },
            h5:{
                fontFamily: ['Roboto',"san-serif"].join(','),
                fontSize:16,
            },
            h6:{
                fontFamily: ['Roboto',"san-serif"].join(','),
                fontSize:14,
            },
        }
    } 
}

export const ColorModeContext = createContext({
    toggleColorMode:()=> {}
});

export const useMode = () =>{
    const [mode,setMode]=useState("light");
    const colorMode=useMemo(()=>({
        toggleColorMode:()=>{
            setMode((prev)=>(prev==="light"?"dark":"light"));
        }
    }),[]);
    const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);

    return[theme,colorMode];
};

