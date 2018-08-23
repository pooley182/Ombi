﻿export interface ISearchArtistResult {
    artistName: string;
    artistType: string;
    disambiguation: string;
    forignArtistId: string;

    banner: string;
    overview: string;
    poster: string;
    monitored: boolean;
    approved: boolean;
    requested: boolean;
    requestId: number;
    available: boolean;
    links: ILink[];
   
    subscribed: boolean;
    showSubscribe: boolean;

    // for the UI
    requestProcessing: boolean;
    processed: boolean;
    background: any;
}

export interface ILink {
    url: string;
    name: string;
}

export interface ISearchAlbumResult {
    albumType: string;
    artistName: string;
    cover: string;
    disk: string;
    foreignAlbumId: string;
    foreignArtistId: string;
    monitored: boolean;
    rating: number;
    releaseDate: Date;
    title: string;
    approved: boolean;
    requested: boolean;
    requestId: number;
    available: boolean;
   
    // for the UI
    requestProcessing: boolean;
    processed: boolean;
    background: any;
}