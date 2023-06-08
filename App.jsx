import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  
  return (
    <div className="container">
      <h2 className='mt-4'>Voice-Recognition</h2>
      <br />
      <p>A react hook that converts speech from the microphone to text and makes it available to your react componenets.
      </p>

      <div className="main-content" onClick={() => setTextToCopy(transcript)}>
        {transcript}
      </div>

      <div className="btn-style m-2">
        <button type="button" className="btn btn-success m-2" onClick={setCopied}>{isCopied ? 'Copied!' : 'Copy to clipboard'}</button>
        <button type="button" className="btn btn-success m-2" onClick={startListening}>Start Listening</button>
        <button type="button" className="btn btn-success m-2" onClick={SpeechRecognition.stopListening}>StopListening</button>
      </div>
    </div>
  )
}

export default App
