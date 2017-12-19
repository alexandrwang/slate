# Create Audio Transcription Task

```shell
curl "https://api.scaleapi.com/v1/task/audiotranscription" \
  -u "{{ApiKey}}:" \
  -d callback_url="http://www.example.com/callback" \
  -d attachment_type=audio \
  -d attachment="https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav" \
  -d verbatim=false \
  -d phrases=avocado \
  -d phrases=stone
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')

client.create_audiotranscription_task(
    callback_url='http://www.example.com/callback',
    attachment_type='audio',
    attachment='https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav',
    verbatim=False,
    phrases=['avocado', 'stone']
)
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

client.createAudiotranscriptionTask({
  'callback_url': 'http://www.example.com/callback',
  'attachment_type': 'audio',
  'attachment': 'https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav',
  'verbatim': false,
  'phrases': ['avocado', 'stone']
}, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

scale.create_audiotranscription_task({
  callback_url: 'http://www.example.com/callback',
  attachment_type: 'audio',
  attachment: 'https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav',
  verbatim: false,
  phrases: ['avocado', 'stone']
})

=> #<Scale::Api::Tasks::AudioTranscription:0x007fcc109b7d58 @task_id="58a6341eaa9d139b20a4252b", @type="audiotranscription", @instruction="Please transcribe the attached audio file.", @params={"verbatim"=>false, "attachment_type"=>"audio", "attachment"=>"https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav"}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:22:06 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}>
```

> The above command returns an object structured like this:

```json
{
  "task_id": "582bfe0ee5d51cda4e903f4a",
  "created_at": "2016-11-16T06:34:54.884Z",
  "callback_url": "http://www.example.com/callback",
  "type": "audiotranscription",
  "status": "pending",
  "urgency": "day",
  "instruction": "Please transcribe the attached audio file.",
  "params": {
    "verbatim": false,
    "attachment_type": "audio",
    "attachment": "https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav",
    "phrases": ["avocado", "stone"]
  },
  "is_test": true,
  "metadata": {}
}
```

<aside class="notice">
Please contact <a href="mailto:sales@scaleapi.com">sales@scaleapi.com</a> before using this endpoint.
</aside>

This endpoint creates an `audiotranscription` task. In this task, we will transcribe the speech from the audio file you specify into plaintext.

You are required to provide a URL to the audio file as the `attachment`. The `attachment_type` must be `audio`.

If you have more specific instructions about how to transcribe the audio file, you may optionally provide a [markdown-enabled](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) `instruction`.

You may optionally specify `verbatim` to `true` or `false`, determining whether non-words such as "um" and "hm" will be included in the transcript. The default is `false`.

You may also optionally specify `phrases`, a list of strings containing words and phrases as "hints" so that the audio transcription is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, or to add additional words to the vocabulary for the transcription.

If successful, Scale will immediately return the generated task object, of which you should at least store the `task_id`.

The parameters `attachment_type`, `attachment`, `verbatim`, and `phrases` will be stored in the `params` object of the constructed `task` object.

<aside class="notice">
The maximum length of an audio file to be transcribed is 30 minutes, and we will only transcribe in English. Any audio file longer than that will return an error.
</aside>

### HTTP Request

`POST https://api.scaleapi.com/v1/task/audiotranscription`

### Parameters

Parameter | Type | Description
--------- | ---- | -------
`callback_url` | string | The full url (including the scheme `http://` or `https://`) of the callback when the task is completed. See the [Callback section](#callbacks) for more details about callbacks.
`instruction` (optional) | string | An markdown-enabled string specifying any special instructions for the audio transcription. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to show examples, give structure to your instructions, and more.
`attachment` | string | A URL pointing to the audio file attachment.
`attachment_type` (optional, default `audio`) | string | Describes what type of file the attachment is. Only accepts `audio`.
`verbatim` (optional, default `false`) | boolean | Specifies whether or not to include non-words (ex: "um", "hm") in the transcript.
`phrases` (optional) | [string] | A list of strings containing words and phrases "hints" so that the audio transcription is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, or to add additional words to the vocabulary for the transcription.
`urgency` (optional, default `day`) | string | A string describing the urgency of the response. One of `immediate`, `day`, or `week`, where `immediate` is a best effort six-hour response time (turnaround time is typically 6 to 24 hours).
`metadata` (optional, default `{}`) | object | A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format.
`skip_human_transcription` (optional, default `false`) | boolean | Specifies whether or not to skip human transcription. Skipping human transcription will result in a very fast response and lower price, but will likely have a lower final quality.

## Callback Format

> Example callback sent on completion

```json
{
  "response": {
    "transcript": "The avocado is a pear-shaped fruit with leathery skin, smooth edible flesh, and a large stone.",
    "duration": 5.106188,
    "alignment": [
      { "word": "The", "start": 0.3, "end": 0.37, "confidence": 0.9 },
      { "word": "avocado", "start": 0.37, "end": 0.79, "confidence": 0.9 },
      { "word": "is", "start": 0.79, "end": 0.94, "confidence": 0.9 },
      { "word": "a", "start": 0.94, "end": 1, "confidence": 0.9 },
      { "word": "pear", "start": 1, "end": 1.3, "confidence": 0.3 },
      { "word": "shaped", "start": 1.3, "end": 1.59, "confidence": 0.3 },
      { "word": "fruit", "start": 1.59, "end": 1.8, "confidence": 0.9 },
      { "word": "with", "start": 1.81, "end": 2.01, "confidence": 0.9 },
      { "word": "leathery", "start": 2.01, "end": 2.37, "confidence": 0.9 },
      { "word": "skin", "start": 2.37, "end": 2.82, "confidence": 0.9 },
      { "word": "smooth", "start": 2.85, "end": 3.11, "confidence": 0.9 },
      { "word": "edible", "start": 3.19, "end": 3.53, "confidence": 0.9 },
      { "word": "flesh", "start": 3.53, "end": 3.88, "confidence": 0.9 },
      { "word": "and", "start": 3.88, "end": 4.02, "confidence": 0.9 },
      { "word": "a", "start": 4.02, "end": 4.06, "confidence": 0.9 },
      { "word": "large", "start": 4.06, "end": 4.37, "confidence": 0.9 },
      { "word": "stone", "start": 4.37, "end": 4.84, "confidence": 0.9 }
    ]
  },
  "task_id": "5774cc78b01249ab09f089dd",
  "task": {
    // populated task for convenience
    ...
  }
}
```

> Example callback body on error or issue

```json
{
  "response": {
    "error": "The audio file cannot be loaded."
  },
  "task_id": "5774cc78b01249ab09f089dd",
  "task": {
    // populated task for convenience
    ...
  }
}
```

The `response` object, which is part of the callback POST request and permanently stored as part of the task object, will have either an `error` field or a `transcript`, `duration`, and `alignment` field.

If the transcription was completed successfully, the transcript will be stored in plaintext under the `transcript` field. It will also contain a `duration` field, which stores the duration of the audio file in seconds.

Successful transcriptions will also include an `alignment` field, which will contain an array of aligned words (in the same order as the transcript), where each entry in the array has the following values:

* `word`: The word in question
* `start` : timestamp in the audio file at which this word begins
* `end` : timestamp in the audio file at which this word ends
* `confidence` : The confidence for this word's alignment. Currently confidences are always one of two values (0.9 or 0.3).

If there was an error or issue during transcription, the error will be detailed in the `error` field, and a partial transcript (if applicable) will be stored in the `transcript` field.

<aside class="notice">
See the <a href="#callbacks">Callback section</a> for more details about callbacks.
</aside>
