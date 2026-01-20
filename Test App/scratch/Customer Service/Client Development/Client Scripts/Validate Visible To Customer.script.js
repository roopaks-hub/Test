function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	if(g_form.getValue('visible_to_customer') == 'false' &&  g_form.getValue('watch_list') != ''){
		g_form.addErrorMessage(getMessage('Please remove all users from the watchlist before clearing the Visible to customer flag'));
		g_form.setValue('visible_to_customer','true');
		return false;
	}
}