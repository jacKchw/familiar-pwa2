import { useState } from "react";
import { openDB } from 'idb';

const FilesystemBtn = ()=>{
    const selectFile = async ()=>{
        let [fileHandle] = await window.showOpenFilePicker();
        idbKeyval.set(fileHandle,"BG fileHandle");
        readFile(fileHandle);
    }
    const readFile = async (fileHandle)=>{
        const file = await fileHandle.getFile();
        idbKeyval.set(file,"BG image");
    }

    return(
        <div>
        <button
        className='add-button'
        onClick={selectFile}>
            BG iamge
        </button>
        </div>
    )
}


const readFile = async ()=>{
    const fileHandle = await idbKeyval.get("BG fileHandle");
    const file = await fileHandle.getFile();
    const URL = window.URL || window.webkitURL;
    const imgURL = URL.createObjectURL(file);
    return imgURL;
}

const readIMG = async ()=>{
    let imgURL;
    try {
        const file = await idbKeyval.get("BG image");
        const URL = window.URL || window.webkitURL;
        imgURL = URL.createObjectURL(file);        
    } catch (error) {
        // imgURL='familiar-pwa2/img/bg.jpg';
        imgURL='./img/bg.jpg';
    }
    return imgURL;
}

const dbPromise = openDB('keyval-store', 1, {
    upgrade(db) {
      db.createObjectStore('keyval');
    },
  });
  
const idbKeyval = {
    async get(key) {
        return (await dbPromise).get('keyval', key);
    },
    async set(val,key) {
        return (await dbPromise).put('keyval', val, key);
    },
    async delete(key) {
        return (await dbPromise).delete('keyval', key);
    },
    async clear() {
        return (await dbPromise).clear('keyval');
    },
    async keys() {
        return (await dbPromise).getAllKeys('keyval');
    },
};

export {readFile, FilesystemBtn, readIMG, idbKeyval};