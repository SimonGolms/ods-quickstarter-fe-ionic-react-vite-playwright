import { blobToBase64 } from '../api.utils';

/**
 * Returns the appropriate size of the photo based on the given size.
 * Appropriate means: it will take the next available size that is greater or equal the requested size.
 * If the requested size is bigger than the largest size, the largest size will be chosen.
 *
 * @export
 * @param {number} size
 * @return {('48x48' | '64x64' | '96x96' | '120x120' | '240x240' | '360x360' | '432x432' | '504x504' | '648x648')}
 */
export const getAppropriateAvailablePhotoSize = (size: number) => {
  // HINT: The supported sizes of photos on Microsoft 365 are: 48x48, 64x64, 96x96, 120x120, 240x240, 360x360, 432x432, 504x504, and 648x648
  // If the user uploads a photo that is 504x504 pixels, all but the 648x648 size of photo will be available for download
  // See: https://docs.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0
  const availablePhotoSizes = [48, 64, 96, 120, 240, 360, 432, 504, 648];

  const largestSize = Math.max(...availablePhotoSizes);
  const nextSize = availablePhotoSizes.find((availableSize) => availableSize >= size) ?? largestSize;

  return `${nextSize}x${nextSize}` as '48x48' | '64x64' | '96x96' | '120x120' | '240x240' | '360x360' | '432x432' | '504x504' | '648x648';
};

// WORKAROUND: If the user does not have a photo, in this case the response will still be cached to avoid constantly sending new requests.
export const responseHandlerPhoto = (response: Response) => {
  if (response.status >= 200 && response.status <= 299) {
    return response.blob().then((blob) => blobToBase64(blob));
  }
  if (response.status >= 400 && response.status <= 499) {
    return Promise.resolve('');
  }
  return response.json();
};

export const responseHandlerValue = async (response: Response) => {
  const { value } = (await response.json()) as Record<'value', unknown>;
  return value;
};

export const validateStatus = (response: Response) =>
  (response.status >= 200 && response.status <= 299) || (response.status >= 400 && response.status <= 499);
