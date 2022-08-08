import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../models/playlist';
import { PlaylistService } from '../../services/Playlist.service';

@Component({
	selector: 'app-Playlist',
	templateUrl: './playlist.component.html',
	styleUrls: []
})
export class PlaylistComponent implements OnInit {

	constructor(public PlaylistService: PlaylistService) { }

	public PlaylistData: Playlist[] | any;
	public name: string | undefined;
	public description: string | undefined;
	public id: number | undefined;

  public nameFilter: String = "";
  public nameFiltered: String | any;
  public descriptionFilteres: String | any;

	ngOnInit(): void {
		this.load();
	}

	load() {
		this.PlaylistData = [];
		this.PlaylistService.getFindAll().subscribe(x => {
			this.PlaylistData = x;
		});
	}

  loadByName() {
    console.log("");
    if(this.nameFilter != "") {
      console.log("");

      this.PlaylistService.getFind(this.nameFilter).subscribe(x => {
        console.log(x);
        this.nameFiltered = x.name;
        this.descriptionFilteres = x.description;
      });
    }
  }

	save() {
		let playlist: Playlist = new Playlist();
    playlist.name = this.name;
    playlist.description = this.description;

		this.PlaylistService.postSave(playlist).subscribe(x => {
			this.load();
			this.clear();
		});
	}
	delete(listName:String) {
		this.PlaylistService.deletePoduct(listName).subscribe(x => {
			this.load();
			this.clear();
		});
	}

	clear() {
		this.name = "";
		this.description = "";
		this.id = 0;
	}
}
