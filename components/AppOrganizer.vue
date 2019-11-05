<template>
  <div id="team-area" class="section section-padding-extra section_bg">
    <div class="container">
      <div class='row'>
          <div class='col-md-6 col-md-offset-3 text-center'>
            <div class='section-heading'>
              <h2 class='section-title'>Team</h2>
            </div>
          </div>
      </div>
      <div class="row">
        <div class="team-members">
          <div class="col-md-4 col-sm-6" v-for="organizer in organizers">
            <div class="team-member text-center wow animated fadeInUp" data-wow-duration="1.5s"  @mouseover="playSound(organizer.sound)" @mouseout="pauseSound">
              <div class="member-mock">
                  <img v-bind:src="organizer.avatar" alt="organizer.name">
              </div>
              <h4 class="member-name">{{ organizer.name }}</h4>
              <span class="member-work">{{ organizer.rol }}</span>
              <p>{{ organizer.bio }}</p>
              <div class="member-connections">
                <a v-if="organizer.twitter" target="_blank" v-bind:href="'https://twitter.com/' + organizer.twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a v-if="organizer.github" target="_blank" v-bind:href="'https://github.com/'  + organizer.github">
                  <i class="fab fa-github"></i>
                </a>
                <a v-if="organizer.website" target="_blank" v-bind:href="organizer.website">
                  <i class="fa fa-home"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import organizers from '@/assets/data/teamMembers.js'
  export default {
    data () {
      return {
        organizers,
        currentSound: '',
      }
    },
    methods: {
      pauseSound() {
        this.currentSound.pause();
      },
      playSound (sound) {
        if(sound) {
          this.currentSound = new Audio(sound);
          this.currentSound.play();
        }
      },
    }
  }
</script>
