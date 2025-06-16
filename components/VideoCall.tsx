'use client';

import { useEffect, useRef, useState} from 'react';

import AgoraRTC from 'agora-rtc-react';


let client = null;

const appId = process.env.AGORA_APPID;
const channelName = 'videoTest';
const token = process.env.AGORA_TOKEN


function initializeClient(){
    client = AgoraRTC.createClient({mode: 'rtc', codec: 'vp8'});
    setupEventListeners();

}

function setupEventListeners() {
    throw new Error('Function not implemented.');
}

async function joinChannel()
