public @interface ClassInfo{
	String autor();
	String data();
	
	int versao() default 1; 

}

public @interface Autor{
	String value();
	

	// @Retention