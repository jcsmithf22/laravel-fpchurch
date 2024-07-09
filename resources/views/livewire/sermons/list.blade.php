<?php

use Livewire\Volt\Component;
use App\Models\Sermon;
use Illuminate\Support\Facades\Storage;

new class extends Component {
    public Sermon $sermon;
    public string $path;

    public function mount(): void
    {
        $sermonTemp = Sermon::first();
        if ($sermonTemp) {
            $this->sermon = $sermonTemp;
            $this->path = Storage::url($this->sermon->name);
        }
    }
}; ?>

<div>
    @if($sermon)
        <p>{{{ $sermon->title }}}</p>
        <media-controller audio>
            <audio
                slot="media"
                src="{{ asset($path) }}"
            ></audio>
            <media-control-bar>
                <media-play-button></media-play-button>
                <media-time-display showduration></media-time-display>
                <media-time-range></media-time-range>
                <media-playback-rate-button></media-playback-rate-button>
                <media-mute-button></media-mute-button>
                <media-volume-range></media-volume-range>
            </media-control-bar>
        </media-controller>
    @endif
</div>
