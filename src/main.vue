<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<!-- Left Panel -->
		<f7-panel left reveal>
			<f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Left Panel"></f7-navbar>
				<f7-pages>

				</f7-pages>
			</f7-view>
		</f7-panel>
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Navbar -->
				<f7-navbar>
					<f7-nav-left>
						<f7-link icon="icon-bars" open-panel="left"></f7-link>
					</f7-nav-left>
					<f7-nav-center sliding>Just Learn</f7-nav-center>
					<f7-nav-right>
						<f7-link icon="icon-gear" open-panel="right"></f7-link>
					</f7-nav-right>
				</f7-navbar>
				<!-- Pages -->
				<a href="#" class="floating-button color-blue">
					<i class="icon icon-plus"></i>
				</a>
				<f7-pages>
					<f7-page pull-to-refresh @ptr:refresh="onRefresh">
						<f7-block>
						<f7-searchbar
						  cancel-link="Cancel"
						  placeholder="Search in items"
						  :clear-button="true">
						  <div slot="before-input">Before Input</div>
						  <div slot="after-input">After Input</div>
						</f7-searchbar>
					</f7-block>
					<f7-block>
						<div class="card">
						  <div class="card-header">Card header</div>
						  <div class="card-content">
						    <div class="card-content-inner">
									Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.</div>
						  </div>
						  <div class="card-footer">
								Card Footer</div>
						</div>
						<div class="card">
						  <div class="card-content">
						    <div class="card-content-inner">
									Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. </div>
						  </div>
						</div>
						<f7-block inner>
							<p></p>
						</f7-block>
						<f7-block-title>Load page in panel</f7-block-title>
						<f7-block-title>Load page in main view</f7-block-title>
						</f7-block>
					</f7-page>
				</f7-pages>
				<f7-tabs animated>
				  <f7-tab id="tab1" active><f7-icon icon="icon-gear"></f7-icon></f7-tab>
				  <f7-tab id="tab2"><f7-icon icon="icon-home"></f7-icon></f7-tab>
				</f7-tabs>
			</f7-view>
		</f7-views>

		<!-- Popup -->
		<f7-popup id="popup">
			<f7-view navbar-fixed>
				<f7-pages>
					<f7-page>
						<f7-navbar title="Popup">
							<f7-nav-right>
								<f7-link :close-popup="true">Close</f7-link>
							</f7-nav-right>
						</f7-navbar>
						<f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-popup>

		<!-- Login Screen -->
		<f7-login-screen id="login-screen">
			<f7-view>
				<f7-pages>
					<f7-page login-screen>
						<f7-login-screen-title>Login</f7-login-screen-title>
						<f7-list form>
							<f7-list-item>
								<f7-label>Username</f7-label>
								<f7-input name="username" placeholder="Username" type="text"></f7-input>
							</f7-list-item>
							<f7-list-item>
								<f7-label>Password</f7-label>
								<f7-input name="password" type="password" placeholder="Password"></f7-input>
							</f7-list-item>
						</f7-list>
						<f7-list>
							<f7-list-button title="Sign In" close-login-screen></f7-list-button>
							<f7-list-label>
								<p>Click Sign In to close Login Screen</p>
							</f7-list-label>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-login-screen>

	</div>
</template>

<script>
	alert("Am in");
	export default {}
</script>
