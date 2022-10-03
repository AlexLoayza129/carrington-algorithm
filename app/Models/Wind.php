<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Wind
 * 
 * @property int $id
 * @property Carbon $date
 * @property float $imf
 * @property float $bx_vector
 * @property float $by_vector
 * @property float $bz_vector
 * @property float $proton_density
 * @property float $velocity
 * @property float $temperature
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Wind extends Model
{
	protected $table = 'wind';

	protected $casts = [
		'imf' => 'float',
		'bx_vector' => 'float',
		'by_vector' => 'float',
		'bz_vector' => 'float',
		'proton_density' => 'float',
		'velocity' => 'float',
		'temperature' => 'float'
	];

	protected $dates = [
		'date'
	];

	protected $fillable = [
		'date',
		'imf',
		'bx_vector',
		'by_vector',
		'bz_vector',
		'proton_density',
		'velocity',
		'temperature'
	];
}
