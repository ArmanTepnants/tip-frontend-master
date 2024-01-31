<template>
  <v-container v-if="$auth.user" style="max-width: 1440px">
    <v-row>
      <v-col cols="12">
        <v-card
          elevation="0"
          :style="{ borderRadius: '12px' }"
        >
          <v-card-actions class="card-actions px-6">
            <v-row align="center" dense>
              <v-col cols="12" sm="6">
                <v-list-item :class="$device.isMobile ? 'text-center' : ''">
                  <v-list-item-avatar
                    class="user-avatar"
                    color="grey"
                  >
                    <v-img
                      class="elevation-6"
                      alt="Avatar"
                      :src="backendUrl + $auth.user.avatar || '/images/defaultAvatar.png'"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="text-left">
                      <span class="user-name">{{$auth.user.firstName}} {{$auth.user.lastName}}</span>
                      <v-btn
                        icon
                        nuxt
                        :to="localePath('/profile/edit')"
                        class="edit-profile-btn ml-2"
                      >
                        <v-icon style="color: #94A3B8">
                          mdi-square-edit-outline
                        </v-icon>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="12" sm="6">
                <div class="balance mr-7 text-left text-sm-right">
                  <span>Balance:&nbsp;</span>
                  <span class="font-weight-bold">{{$auth.user.balance}}&nbsp;€</span>
                </div>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ENV from '~/OLD_env';

  export default {
    name: "Footer",
    data() {
      return {
        backendUrl: ENV.backendUrl,
      }
    }
  }
</script>

<style scoped>
  .edit-profile-btn.v-btn--active {
    display: none;
  }

  .v-list-item {
    padding: 0;
  }

  .v-list-item__avatar {
    margin-right: 20px;
  }

  .user-avatar {
    width: 56px !important;
    height: 56px !important;
  }

  .user-name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }

  .balance {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #475569;
  }

  .card-actions {
    height: 96px !important;
  }

  @media screen and (max-width: 600px) {
    .card-actions {
      height: 154px !important;
    }
  }

</style>
