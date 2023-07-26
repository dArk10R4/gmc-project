<template>
    <main>
        <div class="detail">
      <div class="top">
        <div class="image">
          <img height="50" src="@/assets/icons/mine.png" alt="">
        </div>
        <div class="machine">
          <div class="name">
            <span>VIP 1 - TRX</span>
          </div>
          <div class="amount">
            <span>1400</span>
            <img height="20" src="https://cryptologos.cc/logos/tron-trx-logo.png?v=025" alt="">
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="stat">
          <span>Created</span>
          <span>11.07.2023</span>
        </div>
        <div class="stat">
          <span>Finished</span>
          <span>18.07.2023</span>
        </div>
        <div class="stat">
          <span>Invest Rate</span>
          <span>7%</span>
        </div>
        <div class="stat">
          <span>Earning</span>
          <span>2142 TRX</span>
        </div>
      </div>
    </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.detail {
  background: rgb(68, 63, 8);
  margin: 1rem;
  border-radius: 1.75rem;
  padding: 1rem;
}

.detail .top {
  display: flex;
  background: rgb(61, 109, 61);
  border-top-left-radius: 1.75rem;
  border-top-right-radius: 1.75rem;
}

.detail .top .image {
  width: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
}

.detail .top .image img {
  width: 100%;
}

.detail .top .machine {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 72%;
  gap: 0.66rem;
  padding: 0.66rem;
}

.detail .bottom {
  background: rgb(38, 107, 38);
  padding: 1rem;
  border-bottom-left-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail .bottom .stat {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>