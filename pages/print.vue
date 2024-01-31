<template>
  <v-container style="max-width: 1440px">
    <v-row justify="start" align="center">
      <v-col
        v-for="(item, i) in cards"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        class="item"
      >
        <v-card class="card-block"
                elevation="0">
          <v-row justify="center"
                 class="d-flex"
                 :style="{
                    margin: '0 !important',
                    height: '100%'
                  }">
            <v-col cols="12" class="d-flex" :style="{ padding: '0 !important' }">
              <div>
                <img :src="require(`~/static/img/pages/print/qr/${item.icon}.png`)"
                     alt="Icon"
                     class="qr-icon">
              </div>
              <v-card-text class="py-0 px-0 ml-6">
                <p class="block-title mb-1">{{item.title}}</p>
                <p class="block-size">{{item.size}}</p>
              </v-card-text>
            </v-col>

            <v-col cols="12" class="d-flex align-end" :style="{ padding: '0 !important' }">
              <v-card-text class="py-0 px-0 d-flex" style="justify-content: space-between; gap: 8px">
                <v-btn
                  @click="viewPdf"
                  elevation="0"
                  class="btn-icon"
                  :style="{ backgroundColor: ' #F0F2F9' }"
                >
                  <img
                    class="icon"
                    src="~/static/img/pages/print/eye.png"
                    alt="View"
                  />
                </v-btn>

                <div class="download-buttons">
                  <v-btn
                    class="btn"
                    @click="downloadPng"
                    elevation="0"
                    :style="{ backgroundColor: ' #0666EB' }"
                  >
                    <img
                      class="mr-1 mr-md-2 icon"
                      src="~/static/img/pages/print/png.png"
                      alt="PNG"
                    />
                    Download
                  </v-btn>

                  <v-btn
                    class="btn"
                    @click="downloadPdf"
                    elevation="0"
                    :style="{ backgroundColor: ' #0666EB' }"
                  >
                    <img
                      class="mr-1 mr-md-2 icon"
                      src="~/static/img/pages/print/pdf.png"
                      alt="PDF"
                    />
                    Download
                  </v-btn>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div class="pt-3"></div>
  </v-container>
</template>

<script>
  import ENV from "~/OLD_env";

  export default {
    layout: 'authorized',
    data() {
      return {
        loading: false,
        pdfUrl: '/print/print-' + this.$auth.user.number + '.pdf',
        pngUrl: '/print/print-' + this.$auth.user.number + '.1.png',
        //predefined cards
        cards: [
          {
            title: 'Business card black and white',
            size: '5cm x 9cm',
            icon: 'horizontal',
          },
          {
            title: 'Business card color #1',
            size: '5cm x 9cm',
            icon: 'horizontal',
          },
          {
            title: 'Business card color #2',
            size: '5cm x 9cm',
            icon: 'horizontal',
          },

          {
            title: 'Vertical card',
            size: '5cm x 9cm',
            icon: 'vertical',
          },
          {
            title: 'Table tent with company code',
            size: '15cm x 15cm',
            icon: 'tent',
          },
          {
            title: 'A5 card for text',
            size: '21.0cm x 14.8cm',
            icon: 'horizontal',
          },

          {
            title: 'Round sticker',
            size: '12cm in diameter',
            icon: 'round-sticker',
          },
          {
            title: 'Square sticker',
            size: '12cm x 12cm',
            icon: 'square-sticker',
          },
          {
            title: 'QR code',
            size: '1000x1000px',
            icon: 'simple',
          }
        ]
      }
    },
    methods: {
      async createPdf() {
        this.loading = true;
        await this.$axios.$post(`${ENV.backendUrl}/create-pdf`, {
          number: this.$auth.user.number
        })
          .then((result) => {
            this.loading = false;
            this.pdfUrl = result.fileNamePdf;
            this.pngUrl = result.fileNamePng;
          })
          .catch((error) => {
            this.loading = false;
            console.error(error)
          });
      },
      viewPdf() {
        this.loading = true;
        this.createPdf()
          .then(() => {
            this.loading = false;
            window.open(ENV.backendUrl + this.pdfUrl, '_blank');
          })
          .catch((error) => {
            this.loading = false;
            console.error(error)
          });
      },
      downloadPdf() {
        this.loading = true;
        this.createPdf()
          .then(() => {
            this.loading = false;
            this.$axios({
              url: ENV.backendUrl + this.pdfUrl,
              method: 'GET',
              responseType: 'blob',
            })
              .then((response) => {
                let fileURL = window.URL.createObjectURL(new Blob([response.data]));
                  let fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'file.pdf');
                document.body.appendChild(fileLink);

                fileLink.click();
              })
              .catch((error) => {
                this.loading = false;
                console.error(error)
              });
          })
          .catch((error) => {
            this.loading = false;
            console.error(error)
          });
      },
      downloadPng() {
        this.loading = true;
        this.createPdf()
          .then(() => {
            this.loading = false;
            this.$axios({
              url: ENV.backendUrl + this.pngUrl,
              method: 'GET',
              responseType: 'blob',
            })
              .then((response) => {
                let fileURL = window.URL.createObjectURL(new Blob([response.data]));
                  let fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'file.png');
                document.body.appendChild(fileLink);

                fileLink.click();
              })
              .catch((error) => {
                this.loading = false;
                console.error(error)
              });
          })
          .catch((error) => {
            this.loading = false;
            console.error(error)
          });
      }
    }
  }
</script>

<style scoped>
  .item {
    height: 234px;
  }

  .qr-icon {
    object-fit: none;
  }

  .card-block {
    height: 210px;
    border-radius: 12px;
    padding: 30px;
  }

  @media screen and (max-width: 425px) {
    .card-block {
      padding: 16px;
    }
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .block-size {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: #64748B;
  }

  .download-buttons {
    display: flex;
    gap: 8px;
  }

  .icon {
    object-fit: contain;
    max-width: 20px;
    max-height: 20px;
  }

  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 8px !important;
    min-height: 36px;
    border-radius: 8px;
    text-transform: unset;
    letter-spacing: 0;
  }

  .btn-icon {
    min-height: 36px;
    min-width: 36px !important;
    border-radius: 8px;
    padding: 0 !important;
  }
</style>
