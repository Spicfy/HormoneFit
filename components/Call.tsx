'use client';

import { useState, useEffect } from 'react';
import {
  LocalUser,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteAudioTracks,
  useRemoteUsers,
  AgoraRTCProvider,
  useRTCClient,
} from 'agora-rtc-react';
import AgoraRTC from 'agora-rtc-sdk-ng';

interface CallProps {
  appId: string;
  channelName: string;
}

// Create the Agora client
const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

function VideoCall({ appId, channelName }: CallProps) {
  const [calling, setCalling] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  // Get local audio and video tracks
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  // Join the channel
  useJoin({
    appid: appId,
    channel: channelName,
    token: null, // Use null for testing, you'll need a token for production
    uid: null, // Let Agora assign a random uid
  });

  // Publish local tracks
  usePublish([localMicrophoneTrack, localCameraTrack]);

  // Get remote users
  const remoteUsers = useRemoteUsers();
  
  // Get remote audio tracks and play them
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);
  audioTracks.map((track) => track.play());

  const toggleMic = () => {
    setMicOn(!micOn);
  };

  const toggleCamera = () => {
    setCameraOn(!cameraOn);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Video Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Local User Video */}
        <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
          <LocalUser
            audioTrack={localMicrophoneTrack}
            videoTrack={localCameraTrack}
            cameraOn={cameraOn}
            micOn={micOn}
            playAudio={false} // Don't play local audio to avoid feedback
            playVideo={cameraOn}
            className="w-full h-full"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
            You {!micOn && '🔇'} {!cameraOn && '📹'}
          </div>
        </div>

        {/* Remote Users */}
        {remoteUsers.map((user) => (
          <div key={user.uid} className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
            <RemoteUser
              user={user}
              className="w-full h-full"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
              User {user.uid}
            </div>
          </div>
        ))}

        {/* Empty slots when no remote users */}
        {remoteUsers.length === 0 && (
          <div className="bg-gray-800 rounded-lg flex items-center justify-center aspect-video">
            <div className="text-gray-400 text-center">
              <div className="text-4xl mb-2">👥</div>
              <div>Waiting for others to join...</div>
            </div>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <div className="bg-gray-800 p-4 flex justify-center items-center space-x-4">
        <button
          onClick={toggleMic}
          className={`p-3 rounded-full transition-colors ${
            micOn 
              ? 'bg-gray-600 hover:bg-gray-500 text-white' 
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
          title={micOn ? 'Mute microphone' : 'Unmute microphone'}
        >
          {micOn ? '🎤' : '🔇'}
        </button>

        <button
          onClick={toggleCamera}
          className={`p-3 rounded-full transition-colors ${
            cameraOn 
              ? 'bg-gray-600 hover:bg-gray-500 text-white' 
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
          title={cameraOn ? 'Turn off camera' : 'Turn on camera'}
        >
          {cameraOn ? '📹' : '📷'}
        </button>

        <button
          onClick={() => window.location.href = '/video'}
          className="p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
          title="Leave call"
        >
          📞
        </button>
      </div>

      {/* Connection Status */}
      <div className="bg-gray-700 px-4 py-2 text-center text-sm text-gray-300">
        Connected to channel: <span className="font-semibold text-white">{channelName}</span>
        {remoteUsers.length > 0 && (
          <span className="ml-4">
            {remoteUsers.length} other participant{remoteUsers.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Call({ appId, channelName }: CallProps) {
  return (
    <AgoraRTCProvider client={client}>
      <VideoCall appId={appId} channelName={channelName} />
    </AgoraRTCProvider>
  );
}