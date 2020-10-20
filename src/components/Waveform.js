import React, { useEffect, useRef, useState } from "react";
import {Icon} from 'semantic-ui-react';
import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#93291F",
  cursorColor: "OrangeRed",
  barWidth: 2,
  barRadius: 3,
  responsive: true,
  height: 80,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true
});

export default function Waveform(props) {
  const { audio, setLoading, setPercent } = props
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(audio);

    wavesurfer.current.on("loading", function(progress) {
      setLoading(true);
      setPercent(progress);
    });

    wavesurfer.current.on("ready", function() {
      wavesurfer.current.setVolume(volume)
      setLoading(false);
    });

    wavesurfer.current.on("finish", function() {
      wavesurfer.current.setVolume(volume)
      setPlay(!playing);
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [audio, setLoading, setPercent]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const onVolumeChange = e => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <button onClick={handlePlayPause}>{!playing ?<Icon size="large" fitted name='play'/>:<Icon size="large" fitted name='pause'/>}</button>
        <div className="volume-controls">
          <label htmlFor="volume">Volume: </label>
          <input
            type="range"
            id="volume"
            name="volume"
            // waveSurfer recognize value of `0` same as `1`
            //  so we need to set some zero-ish value for silence
            min="0.01"
            max="1"
            step=".025"
            onChange={onVolumeChange}
            defaultValue={volume}
          />
        </div>
      </div>
    </div>
  );
}