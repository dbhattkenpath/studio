// Constant values for FormatPresets sorted by id
const FormatPresetsMap = new Map([
  [
    'audio',
    {
      id: 'audio',
      readable_name: 'Audio',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: true,
      order: 1,
      kind_id: 'audio',
      allowed_formats: ['mp3'],
      associated_mimetypes: ['.mp3'],
    },
  ],
  [
    'audio_thumbnail',
    {
      id: 'audio_thumbnail',
      readable_name: 'Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: true,
      order: 2,
      kind_id: 'audio',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'channel_thumbnail',
    {
      id: 'channel_thumbnail',
      readable_name: 'Channel Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: true,
      order: 0,
      kind_id: null,
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'document',
    {
      id: 'document',
      readable_name: 'Document',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: true,
      order: 2,
      kind_id: 'document',
      allowed_formats: ['pdf'],
      associated_mimetypes: ['application/pdf'],
    },
  ],
  [
    'document_thumbnail',
    {
      id: 'document_thumbnail',
      readable_name: 'Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: true,
      order: 3,
      kind_id: 'document',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'epub',
    {
      id: 'epub',
      readable_name: 'ePub Document',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: true,
      order: 1,
      kind_id: 'document',
      allowed_formats: ['epub'],
      associated_mimetypes: ['application/epub+zip'],
    },
  ],
  [
    'exercise',
    {
      id: 'exercise',
      readable_name: 'Exercise',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: false,
      order: 1,
      kind_id: 'exercise',
      allowed_formats: ['perseus'],
      associated_mimetypes: ['application/perseus+zip'],
    },
  ],
  [
    'exercise_graphie',
    {
      id: 'exercise_graphie',
      readable_name: 'Exercise Graphie',
      multi_language: false,
      supplementary: true,
      thumbnail: false,
      subtitle: false,
      display: false,
      order: 4,
      kind_id: 'exercise',
      allowed_formats: ['svg', 'json', 'graphie'],
      associated_mimetypes: ['application/json', '.graphie', 'image/svg'],
    },
  ],
  [
    'exercise_image',
    {
      id: 'exercise_image',
      readable_name: 'Exercise Image',
      multi_language: false,
      supplementary: true,
      thumbnail: false,
      subtitle: false,
      display: false,
      order: 3,
      kind_id: 'exercise',
      allowed_formats: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
      associated_mimetypes: ['image/jpeg', 'image/svg', 'image/gif', 'image/png'],
    },
  ],
  [
    'exercise_thumbnail',
    {
      id: 'exercise_thumbnail',
      readable_name: 'Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: true,
      order: 2,
      kind_id: 'exercise',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'h5p',
    {
      id: 'h5p',
      readable_name: 'H5P',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: false,
      order: 1,
      kind_id: 'h5p',
      allowed_formats: ['h5p'],
      associated_mimetypes: ['.h5p'],
    },
  ],
  [
    'h5p_thumbnail',
    {
      id: 'h5p_thumbnail',
      readable_name: 'H5P Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: true,
      order: 2,
      kind_id: 'h5p',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'high_res_video',
    {
      id: 'high_res_video',
      readable_name: 'High Resolution',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: true,
      order: 1,
      kind_id: 'video',
      allowed_formats: ['mp4', 'webm'],
      associated_mimetypes: ['video/mp4', 'video/webm'],
    },
  ],
  [
    'html5_dependency',
    {
      id: 'html5_dependency',
      readable_name: 'HTML5 Zip Dependency',
      multi_language: false,
      supplementary: true,
      thumbnail: false,
      subtitle: false,
      display: false,
      order: 3,
      kind_id: 'html5',
      allowed_formats: ['zip'],
      associated_mimetypes: ['.zip'],
    },
  ],
  [
    'html5_thumbnail',
    {
      id: 'html5_thumbnail',
      readable_name: 'HTML5 Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: true,
      order: 2,
      kind_id: 'html5',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'html5_zip',
    {
      id: 'html5_zip',
      readable_name: 'HTML5 Zip',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: true,
      order: 1,
      kind_id: 'html5',
      allowed_formats: ['zip'],
      associated_mimetypes: ['.zip'],
    },
  ],
  [
    'low_res_video',
    {
      id: 'low_res_video',
      readable_name: 'Low Resolution',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: true,
      order: 2,
      kind_id: 'video',
      allowed_formats: ['mp4', 'webm'],
      associated_mimetypes: ['video/mp4', 'video/webm'],
    },
  ],
  [
    'slideshow_image',
    {
      id: 'slideshow_image',
      readable_name: 'Slideshow Slide Image',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: false,
      order: 3,
      kind_id: 'slideshow',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'slideshow_manifest',
    {
      id: 'slideshow_manifest',
      readable_name: 'Slideshow Manifest',
      multi_language: false,
      supplementary: false,
      thumbnail: false,
      subtitle: false,
      display: false,
      order: 1,
      kind_id: 'slideshow',
      allowed_formats: ['json'],
      associated_mimetypes: ['application/json'],
    },
  ],
  [
    'slideshow_thumbnail',
    {
      id: 'slideshow_thumbnail',
      readable_name: 'Slideshow Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: false,
      order: 2,
      kind_id: 'slideshow',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'topic_thumbnail',
    {
      id: 'topic_thumbnail',
      readable_name: 'Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: true,
      order: 1,
      kind_id: 'topic',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
  [
    'video_dependency',
    {
      id: 'video_dependency',
      readable_name: 'Video Dependency',
      multi_language: false,
      supplementary: true,
      thumbnail: false,
      subtitle: false,
      display: false,
      order: 3,
      kind_id: 'video',
      allowed_formats: ['mp4', 'webm'],
      associated_mimetypes: ['video/mp4', 'video/webm'],
    },
  ],
  [
    'video_subtitle',
    {
      id: 'video_subtitle',
      readable_name: 'Subtitle',
      multi_language: true,
      supplementary: true,
      thumbnail: false,
      subtitle: true,
      display: true,
      order: 4,
      kind_id: 'video',
      allowed_formats: ['vtt'],
      associated_mimetypes: ['.vtt'],
    },
  ],
  [
    'video_thumbnail',
    {
      id: 'video_thumbnail',
      readable_name: 'Thumbnail',
      multi_language: false,
      supplementary: true,
      thumbnail: true,
      subtitle: false,
      display: true,
      order: 3,
      kind_id: 'video',
      allowed_formats: ['png', 'jpg', 'jpeg'],
      associated_mimetypes: ['image/jpeg', 'image/png'],
    },
  ],
]);

export default FormatPresetsMap;

export const FormatPresetsList = Array.from(FormatPresetsMap.values());

export const FormatPresetsNames = {
  AUDIO: 'audio',
  AUDIO_THUMBNAIL: 'audio_thumbnail',
  CHANNEL_THUMBNAIL: 'channel_thumbnail',
  DOCUMENT: 'document',
  DOCUMENT_THUMBNAIL: 'document_thumbnail',
  EPUB: 'epub',
  EXERCISE: 'exercise',
  EXERCISE_GRAPHIE: 'exercise_graphie',
  EXERCISE_IMAGE: 'exercise_image',
  EXERCISE_THUMBNAIL: 'exercise_thumbnail',
  H5P: 'h5p',
  H5P_THUMBNAIL: 'h5p_thumbnail',
  HIGH_RES_VIDEO: 'high_res_video',
  HTML5_DEPENDENCY: 'html5_dependency',
  HTML5_THUMBNAIL: 'html5_thumbnail',
  HTML5_ZIP: 'html5_zip',
  LOW_RES_VIDEO: 'low_res_video',
  SLIDESHOW_IMAGE: 'slideshow_image',
  SLIDESHOW_MANIFEST: 'slideshow_manifest',
  SLIDESHOW_THUMBNAIL: 'slideshow_thumbnail',
  TOPIC_THUMBNAIL: 'topic_thumbnail',
  VIDEO_DEPENDENCY: 'video_dependency',
  VIDEO_SUBTITLE: 'video_subtitle',
  VIDEO_THUMBNAIL: 'video_thumbnail',
};
