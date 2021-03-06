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
  normalize: true,
  partialRender: true
});

export default function Waveform(props) {
  const { audio, setLoading, setPercent } = props
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const volume = useRef(.5);
  const [playing, setPlay] = useState(false);

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
      wavesurfer.current.setVolume(volume.current)
      setLoading(false);
    });

    wavesurfer.current.on("finish", function() {
      wavesurfer.current.setVolume(volume.current)
      setPlay(p => !p);
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [audio, setLoading, setPercent]);

  const handlePlayPause = () => {
    setPlay(p => !p);
    wavesurfer.current.playPause();
  };

  const setVolume = (val) => {
    volume.current = val
  }

  const onVolumeChange = e => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  // NOTE: waveSurfer recognize value of `0` same as `1`
  //  so volume must be set to non-zero min
  return (
    <div id="music-player">
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <button onClick={handlePlayPause}>{!playing ?<Icon size="large" fitted name='play'/>:<Icon size="large" fitted name='pause'/>}</button>
        <div className="volume-controls">
          <label htmlFor="volume"><Icon size="large" fitted name={volume === 0.01 ? 'volume off' : "volume down"}/></label>
          <input
            type="range"
            id="volume"
            name="volume"
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