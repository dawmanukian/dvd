import React, { useState } from "react";
import "./dvd.css";
import Header from "../../components/header/Header";
import { ReactComponent as Ds } from "../../img/sc.svg";

const Dvd = () => {
  const [hz, setHz] = useState(0);
  const [anim, setAnim] = useState(0);
  let audioContext, analyser, source, dataArray, stream;
  const st = async () => {
    try {
      // Request access to the microphone
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Create an AudioContext
      audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Create a MediaStreamAudioSourceNode
      source = audioContext.createMediaStreamSource(stream);

      // Create an AnalyserNode
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;

      // Connect the source to the analyser
      source.connect(analyser);

      // Create a buffer to store the frequency data
      const bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      // Start the process
      getFrequency();
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };
  function getFrequency() {
    analyser.getByteFrequencyData(dataArray);

    // Find the peak frequency
    let maxIndex = 0;
    let maxValue = 0;
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i] > maxValue) {
        maxValue = dataArray[i];
        maxIndex = i;
      }
    }

    // Calculate the frequency value
    const frequency = (maxIndex * audioContext.sampleRate) / analyser.fftSize;
    setHz(frequency.toFixed(2));

    // Update the rotation speed
    updateRotationSpeed(frequency);

    // Call getFrequency every 100 ms
    setTimeout(getFrequency, 100);
  }

  function updateRotationSpeed(frequency) {
    // Calculate the animation duration based on frequency
    // Example: frequency range to animation duration range
    const minDuration = 0.5; // Minimum duration (seconds)
    const maxDuration = 2; // Maximum duration (seconds)
    const maxFrequency = 2000; // Max frequency for scaling duration
    const animationDuration = Math.max(
      minDuration,
      maxDuration - (frequency / maxFrequency) * (maxDuration - minDuration)
    );
    setAnim(animationDuration);
  }

  return (
    <div className="dvd-game">
      <Header />
      <div className="game">
        <Ds className="ds" style={{ animationDuration: `${anim}s` }} />
        <button onClick={st}>Scream now</button>
        <p style={{ color: "#fff", fontSize: "25px" }}>{hz} Hz</p>
      </div>
    </div>
  );
};

export default Dvd;
