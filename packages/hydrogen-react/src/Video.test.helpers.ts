import type {Video as VideoType, VideoSource} from './storefront-api-types.js';
import {faker} from '@faker-js/faker';
import type {PartialDeep} from 'type-fest';
import {getPreviewImage} from './Image.test.helpers.js';

export function getVideoData(
  video: PartialDeep<VideoType, {recurseIntoArrays: true}> = {},
): PartialDeep<VideoType, {recurseIntoArrays: true}> {
  return {
    id: video.id ?? faker.word.words(),
    mediaContentType: 'VIDEO',
    previewImage: getPreviewImage(video.previewImage ?? undefined),
    sources: video.sources ?? getVideoSources(),
  };
}

function getVideoSources(): Partial<VideoSource>[] {
  return [
    {mimeType: faker.system.mimeType(), url: faker.internet.url()},
    {mimeType: faker.system.mimeType(), url: faker.internet.url()},
  ];
}
