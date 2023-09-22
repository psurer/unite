import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.component.html',
  styleUrls: ['./social-sharing.component.scss']
})

export class SocialSharingComponent {

  // Defining two input properties with their default values
  @Input() shareUrl = '';
  @Input() shareText = '';

  // Defining an object containing social media share URLs
  socialMediaUrls = {
    facebook: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(this.shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.shareUrl)}&text=${encodeURIComponent(this.shareText)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.shareUrl)}&title=${encodeURIComponent(this.shareText)}`,
    email: `mailto:?subject=${encodeURIComponent(this.shareText)}&body=${encodeURIComponent(this.shareUrl)}`
  };

  // Constructor for the SocialSharingComponent class
  constructor() {}

  // Function to share on Facebook
  onFacebookShare() {
    // Creating a URL with the share URL
    const url = `https://www.facebook.com/sharer/sharer.php?u=${this.shareUrl}`;
    // Opens the URL in a new window
    window.open(url, '_blank');
  }

  // Function to share on Twitter
  onTwitterShare() {
    // Creating a URL with the share URL and text
    const url = `https://twitter.com/share?url=${this.shareUrl}&text=${this.shareText}`;
    // opens the URL in a new window
    window.open(url, '_blank');
  }

  // Function to share on LinkedIn
  onLinkedinShare() {
    // Creating a URL with the share URL and text
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${this.shareUrl}&title=${this.shareText}`;
    // Open the URL in a new window
    window.open(url, '_blank');
  }
}
