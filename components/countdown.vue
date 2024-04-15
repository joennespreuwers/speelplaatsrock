<template>
  <div class="flex items-start">
    <div
      class="flex-1 mx-2 bg-white rounded-lg p-4 text-center drop-shadow-lg duration-300 hover:drop-shadow-2xl"
    >
      <p class="text-2xl md:text-6xl font-velodroma" ref="countdown_d"></p>
      <p class="text-sm font-sans">Days</p>
    </div>
    <div
      class="flex-1 mx-2 bg-white rounded-lg p-4 text-center drop-shadow-lg duration-300 hover:drop-shadow-2xl"
    >
      <p class="text-2xl md:text-6xl font-velodroma" ref="countdown_h"></p>
      <p class="text-sm font-sans">Hours</p>
    </div>
    <div
      class="flex-1 mx-2 bg-white rounded-lg p-4 text-center drop-shadow-lg duration-300 hover:drop-shadow-2xl"
    >
      <p class="text-2xl md:text-6xl font-velodroma" ref="countdown_m"></p>
      <p class="text-sm font-sans">Minutes</p>
    </div>
    <div
      class="flex-1 mx-2 bg-white rounded-lg p-4 text-center drop-shadow-lg duration-300 hover:drop-shadow-2xl"
    >
      <p class="text-2xl md:text-6xl font-velodroma" ref="countdown_s"></p>
      <p class="text-sm font-sans">Seconds</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetDate: new Date("2024-04-27T15:00:00"),
      countdownInterval: null,
      countdownElements: {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
      },
    };
  },
  mounted() {
    this.countdownElements.days = this.$refs.countdown_d;
    this.countdownElements.hours = this.$refs.countdown_h;
    this.countdownElements.minutes = this.$refs.countdown_m;
    this.countdownElements.seconds = this.$refs.countdown_s;

    this.startCountdown();
  },
  methods: {
    startCountdown() {
      this.countdownInterval = setInterval(this.updateCountdown, 1000);
    },
    updateCountdown() {
      const currentDate = new Date();
      const remainingTime = this.targetDate - currentDate;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      this.countdownElements.days.textContent = days;
      this.countdownElements.hours.textContent = hours;
      this.countdownElements.minutes.textContent = minutes;
      this.countdownElements.seconds.textContent = seconds;
    },
  },
  beforeDestroy() {
    clearInterval(this.countdownInterval);
  },
};
</script>
