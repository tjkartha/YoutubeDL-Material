/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { FileType } from './FileType';

export interface CreatePlaylistRequest {
    playlistName: string;
    fileNames: Array<string>;
    type: FileType;
    thumbnailURL: string;
    duration: number;
}
